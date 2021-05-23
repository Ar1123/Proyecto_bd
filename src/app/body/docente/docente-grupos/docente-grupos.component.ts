import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docente-grupos',
  templateUrl: './docente-grupos.component.html',
  styleUrls: ['./docente-grupos.component.css']
})
export class DocenteGruposComponent implements OnInit {
  items=['Home', 'Actividades', 'Cursos'];
  asignaturas = ['Matematicas', 'Estadistica', 'Gemoetria'];
  grupos: string;
  id:string;
  ligrupo1 = ['ABDO 	FRANCIS 	JUAN MIGUE', 'ABREU 	HERNÁNDEZ 	LUIS FELIPE','ACOSTA 	TORRES 	LAURA SUSANA', 'AGUAYO 	GONZÁLEZ 	ÁLVARO', 'AGUILAR 	SALINAS 	CARLOS ALBERTO', 'AGUILAR 	SETIÉN 	JOSÉ ÁLVARO', 'BRIONES 	GARDUÑO 	JESÚS CARLOS ',
  'BUENDÍA 	HERNÁNDEZ 	ALFONSO',
  'BURGOS 	VARGAS 	RUBÉN' 	,
  'CABRAL 	CASTAÑEDA 	ANTONIO RAFAEL'];
  
  event1: boolean = false;
  event2: boolean = false;
  event3: boolean = false;
  event4: boolean = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

this.grupos = this.router.snapshot.paramMap.get('curso');

  }

  grupo1(){
    this.id = "1";
  this.event1 = true;
  }

  grupo2(){
    this.id = "2";

    this.event2 = true;

  }

  grupo3(){
    this.id = "3";

    this.event3 = true;

  }

  grupo4(){
    this.id = "4";

    this.event4 = true;

  }

}
