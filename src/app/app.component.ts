import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'calculadora_app';
  resultado: string = '';
  nombreResultado = 'Resultado';

  sumar(primerNumero: string, segundoNumero: string) {
    this.nombreResultado = 'Resultado de la suma';
    this.resultado = (Number(primerNumero) + Number(segundoNumero)).toString();
  }

  restar(primerNumero: string, segundoNumero: string) {
    this.nombreResultado = 'Resultado de la resta';
    this.resultado = (Number(primerNumero) - Number(segundoNumero)).toString();
  }

  multiplicar(primerNumero: string, segundoNumero: string) {
    this.nombreResultado = 'Resultado de la multiplicación';
    this.resultado = (Number(primerNumero) * Number(segundoNumero)).toString();
  }

  dividir(primerNumero: string, segundoNumero: string) {
    this.nombreResultado = 'Resultado de la división';
    this.resultado = (Number(primerNumero) / Number(segundoNumero)).toString();
  }
}
