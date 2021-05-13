import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
 
  listaArchivos:string[] =['archivo.pdf', 'archivo.docx', 'archivo.xls'];  
  listaEnlaces:string[] =['https://www.youtube.com/watch?v=qhAbg_eVXSw&list=RDqhAbg_eVXSw&start_radio=1', 'https://www.youtube.com/watch?v=8wGN7D03Nho&list=RDqhAbg_eVXSw&index=4',];  
  aniadirTarea:boolean = false;
  constructor() { }

  aniadir():void{
  this.aniadirTarea = true;    
  }
  cancelar():void{
    this.aniadirTarea = false;    
  }

  ngOnInit(): void {}
}
