import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  items:String[] = ['Home', 'Actividades', 'Contacto']
  constructor() { }

  ngOnInit(): void {
  }

}
