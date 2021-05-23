import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-entregas',
  templateUrl: './ver-entregas.component.html',
  styleUrls: ['./ver-entregas.component.css']
})
export class VerEntregasComponent implements OnInit {

  items=['Home', 'Actividades', 'Cursos'];
  asignaturas = ['Matematicas', 'Estadistica', 'Gemoetria'];
  ligrupo1 = ['ABDO 	FRANCIS 	JUAN MIGUE', 'ABREU 	HERNÁNDEZ 	LUIS FELIPE','ACOSTA 	TORRES 	LAURA SUSANA', 'AGUAYO 	GONZÁLEZ 	ÁLVARO', 'AGUILAR 	SALINAS 	CARLOS ALBERTO', 'AGUILAR 	SETIÉN 	JOSÉ ÁLVARO', 'BRIONES 	GARDUÑO 	JESÚS CARLOS ',
  'BUENDÍA 	HERNÁNDEZ 	ALFONSO',
  'BURGOS 	VARGAS 	RUBÉN' 	,
  'CABRAL 	CASTAÑEDA 	ANTONIO RAFAEL'];
  grupos: string;
  id:string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.grupos = this.router.snapshot.paramMap.get('curso');
    this.id = this.router.snapshot.paramMap.get('id');
  }

}
