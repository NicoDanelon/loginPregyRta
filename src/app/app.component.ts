import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre= 'Nicolas'

  constructor(){
    setInterval(()=> this.nombre= "Leo", 3000);
  }

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2
  }
}
