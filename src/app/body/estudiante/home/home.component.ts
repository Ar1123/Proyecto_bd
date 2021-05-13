import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  items:String[] = ['Home', 'Asignaturas', 'Historial Notas'];

  listaAsignaturas:String[] =[
    'Matematicas', 'Filosofia','Cienacias Naturales',
    'Geometria','Estadistica', 'Religion'
  ];// NOTA: se debe llenar de acuerdo al grado
  constructor() { }

  ngOnInit(): void {
  }

 

}
