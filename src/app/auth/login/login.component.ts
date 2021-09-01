import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items:String[] = ['Home', 'Asignaturas', 'Historial Notas']

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private loginService: LoginService


  ) { }

  formulario:FormGroup = this.fb.group({
    usuario:['',[Validators.required]],
    contrasenia:['',[Validators.required]],
  });  

  login(){
    const {usuario, contrasenia} = this.formulario.value;
    this.loginService.login(usuario, contrasenia)
                      .subscribe(response=>{
                        if(response==true){
                          console.log(localStorage.getItem('rol'));
                          console.log(localStorage.getItem('userId'));
                           
                          const id = localStorage.getItem('userId');

                          const rol = localStorage.getItem('rol');

                          this.router.navigate(['school/inicioEstudiante',id]);
                          console.log(`school/inicioEstudiante/${id}`);
                          if(rol=='Docente'){

                            this.router.navigateByUrl('school/home');
                          }

                          // 114420560
                        }else{
                          Swal.fire('Error', response, 'error');
                        }
                      });    

  }


  ngOnInit(): void {
  }

}
