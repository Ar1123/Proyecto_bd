import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.component.html',
  styleUrls: ['./home-docente.component.css']
})
export class HomeDocenteComponent implements OnInit {

  items=['Home', 'Actividades', 'Cursos'];

  asignaturas=['Matematicas', 'Ciencias Naturales', 'Quimica'];
  cursos = ['Sexto', 'Septimo', 'Octavo', 'Noveno', 'Decimo', 'Once'];
  constructor() { }

  ngOnInit(): void {
  }

}
