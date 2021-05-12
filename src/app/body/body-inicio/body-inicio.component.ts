import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-inicio',
  templateUrl: './body-inicio.component.html',
  styleUrls: ['./body-inicio.component.css']
})
export class BodyInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irLogin(){
this.router.navigateByUrl('login');
  }

}
