import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.css']
})
export class DetalleActividadComponent implements OnInit {
  items:String[] = ['Home', 'Actividades', 'Contacto']
  constructor() { }

  ngOnInit(): void {
  }

}
