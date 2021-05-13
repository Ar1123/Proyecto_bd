import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  items:String[] = ['Home', 'Actividades', 'Contacto'];
  listaAsignaturas:String[] =[
    'Matematicas', 'Filosofia','Ciencias Naturales',
    'Geometria','Estadistica', 'Religion'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
