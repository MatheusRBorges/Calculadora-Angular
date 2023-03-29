import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  num1: number = 0; 
  num2: number = 0;
  resultado: number = 0;
 

  somar(){
    this.resultado = this.num1 + this.num2; 
  }

  subtrair(){
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(){
    this.resultado = this.num1 * this.num2;
  }

  dividir(){
    this.resultado = this.num1 / this.num2;
  }
  
  limpar(){
    this.limpar;
  }
}

