import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
 
  listaArchivos:string[]  = ['archivo.pdf', 'archivo.docx', 'archivo.xls'];  //Este array es de prueba
  listaEnlaces:string[]   = [
    'https://www.youtube.com/watch?v=qhAbg_eVXSw&list=RDqhAbg_eVXSw&start_radio=1', 
    'https://www.youtube.com/watch?v=8wGN7D03Nho&list=RDqhAbg_eVXSw&index=4',];  //Este aray es de prueba
  archivoCargado:string[] = [];
  aniadirTarea:boolean = false;
  constructor() { }

  aniadir():void{
  this.aniadirTarea = true;    
  }
  cancelar():void{
    this.aniadirTarea = false;    
  }

  getArchivo(e){
    const d = e.target.files[0].name;    
    console.log(d);    
    if(d!=''){
      this.archivoCargado.push(d);        
    }
  }

  ngOnInit(): void {}
}
