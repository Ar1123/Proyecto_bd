import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, reduce, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// import { GradosInterface } from '../interface/grados_interface';
// import { GruposInterface } from '../interface/grupos_interface';
import { ResponseInterface, BodyStudent } from '../interface/inteface_tracher';

@Injectable({
  providedIn: 'root'
})
export class ServiceDocenteService {

  private baseUrl:String  = environment.baseURL;
  private idUser:String = localStorage.getItem('userId');
  private fecha_inicial:string ='';

  constructor(private http: HttpClient) { }


/*
.............##.......##.....######...########.########
............##.......##.....##....##..##..........##...
...........##.......##......##........##..........##...
..........##.......##.......##...####.######......##...
.........##.......##........##....##..##..........##...
........##.......##.........##....##..##..........##...
.......##.......##...........######...########....##...
*/
  //Obtiene el nombre y apellido del docente
  getDatosUsuario(){
    
    const URL = `${this.baseUrl}/datosUser/${this.idUser}`;
    return  this.http.get<ResponseInterface>(URL).
    pipe(
    
      map(res=>{
        return res.body;
      }),
      catchError(e=>of(e))
    ) 
  }

  getAsignaturas(){
      const url = `${this.baseUrl}/asigDocente/${this.idUser}`;

    return this.http.get<ResponseInterface>(url)
                    .pipe(
                        map(res=>{
                          return res.body;
                        }),
                        catchError(e=>of(e))
                    );
  }
  //Obtiene los grados donde el docenet da clases
  getGrados(){
    const URL = `${this.baseUrl}/grados/${localStorage.getItem('userId')}`;

    return  this.http.get<ResponseInterface>(URL).
    pipe(
    
      map(res=>{        
        return res.body;
      }),
      catchError(e=>of(e))
    )
  }
  //obtiene los grupos donde el docente da clases de acuerdo al grado
  getGrupos(grado:String){
    
    const URL = `${this.baseUrl}/grupos/${this.idUser}/${grado}`;

    return this.http.get<ResponseInterface>(URL)
                    .pipe(
                      map(res=>{
                        return res.body;
                      }),
                      catchError(e=>of(e))
                    )

  }


//Obtiene el noombre de los estudiante de acuero al grado y grupo 
  getEstdiantes(grado:string) {
  const URL = `${this.baseUrl}/lista/${grado}`;
    return this.http.get<ResponseInterface>(URL)
              .pipe(
                map(res=>{
                  return  res.body;
                 }),
                 catchError(e=>of(e))
              );
  }

  getGrado(id_grado:string){
    const URL = `${this.baseUrl}/grado/${id_grado}`;
    return this.http.get<ResponseInterface>(URL)
               .pipe(
                  map(res=>{
                     return res.body; 
                  }), 
                  catchError(e=>of(e))
               );
  }

  getGrupo( id_grado:string, id_grupo:string){
    const url = `${this.baseUrl}/grupo/${id_grupo}/${id_grado}`;
    console.log(url);
    
    return this.http.get<ResponseInterface>(url)
                .pipe(map(res=>{
                  return res.body;
                }),
                catchError(e=>of(e))
                );
    
  }
  getAsignatura(grupo:string){
    
    const ulr = `${this.baseUrl}/asignatura/${grupo}/${this.idUser}`;
    return this.http.get<ResponseInterface>(ulr)
                    .pipe(
                        map(res=>{
                          return res.body;
                        }),
                        catchError(e=>of(e))
                    );

  }

  listActividades(id_grupo:string){

    const url  = `${this.baseUrl}/listActividades/${this.idUser}/${id_grupo}`;
    return this.http.get<ResponseInterface>(url)
                .pipe(
                  map(res=>{
                    return res.body;
                  }),
                  catchError(e=>of(e))
                )} 

  periodos(){

    const url = `${this.baseUrl}/periodos`;
    return this.http.get<ResponseInterface>(url)
               .pipe(
                 map(
                   res=>{
                     return res.body;
                   }
                 ),
                 catchError(e=>of(e))
               )  
  }              

 /*
 ..........##.......##.########...#######...######..########
 .........##.......##..##.....##.##.....##.##....##....##...
 ........##.......##...##.....##.##.....##.##..........##...
 .......##.......##....########..##.....##..######.....##...
 ......##.......##.....##........##.....##.......##....##...
 .....##.......##......##........##.....##.##....##....##...
 ....##.......##.......##.........#######...######.....##...
 */

    CrearActvidad(fecha_limite:string, descripcion:string, id_grupo:string, id_periodo:string){
     const url = `${this.baseUrl}/crearActividad`;
    // const  id_periodos = '001P';
    let fecha = new Date();
    let dia:string;
    let mes:string;
    if(fecha.getDate()<10){
      dia = `0${fecha.getDate()}`;
    } else{
      dia = `${fecha.getDate()}`;
      
    } 
    if((fecha.getMonth()+1)<10){
      mes = `0${fecha.getMonth()+1}`;
    } else{
      mes = `${fecha.getMonth()+1}`; 
      } 
      
      
      this.fecha_inicial = `${fecha.getFullYear()}-${mes}-${dia}`;
      
      const body ={
        id_periodo, 
        descripcion, 
        id_grupo, 
        id_docente:this.idUser, 
        fecha_inicial:this.fecha_inicial,
        fecha_limite,
       }
     return   this.http.post<ResponseInterface>(url, body)
                .pipe(
                  map(res => {
                    return res.body}),
                  catchError(e => of(e.error))  
                ) ; 
     
     
    }


  /*
  .......##.......##.########..##.....##.########
  ......##.......##..##.....##.##.....##....##...
  .....##.......##...##.....##.##.....##....##...
  ....##.......##....########..##.....##....##...
  ...##.......##.....##........##.....##....##...
  ..##.......##......##........##.....##....##...
  .##.......##.......##.........#######.....##...
  */


  editActivity(id_actividad:string, descripcion:string){

    const url = `${this.baseUrl}/editarActividad/${id_actividad}`;
    const body = {
        descripcion
    };

    return this.http.put<ResponseInterface>(url, body)
                    .pipe(
                      map(res=>{
                        return res.ok;
                      }),
                      catchError(e=>of(e))
                    )
    
  }



}


