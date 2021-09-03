import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/interface/inteface_tracher';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baserUrl: String = environment.baseURL;


  constructor(private http: HttpClient) { }
  
  login(usuario: String, contrasenia: String) {
    const URL = `${this.baserUrl}/sigin`;
    const body = { usuario, contrasenia }
    return this.http.post<ResponseInterface>(URL, body)
      .pipe(
        tap(response => {
          console.log(response);
          if (response.ok) {
            //se guarda en el localStorage el id y el rol de usuario
            localStorage.setItem('userId', response.body[0].id_usuario);
            localStorage.setItem('rol', response.body[0].rol);
          }
        }),
        map(res => res.ok),// si el status es exitoso, se envia un booleano true
        catchError(e => of(e.error.msg))  // si el status es fallido se envia el mensaje recibido por back
      );

  }

  verificarUser(): Observable<boolean> {
    const URL = `${this.baserUrl}/datosUser/${localStorage.getItem('userId') || ''}`;

    return this.http.get<ResponseInterface>(URL).
      pipe(
        map(res => {

          return res.ok;
        }),
        catchError(e => of(false))
      )
  }
}
