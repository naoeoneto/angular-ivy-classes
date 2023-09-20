import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  buttonLabel: string = 'CARRINHO'
  buttonSecond: string = 'Adicionar aos favoritos'
}
