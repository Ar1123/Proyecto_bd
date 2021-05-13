import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  
  @Input()items:[] = []
  @Input()activado:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

}
