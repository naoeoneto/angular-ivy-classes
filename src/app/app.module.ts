import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { GameGridComponent } from './gamegrid/gamegrid.component';
import { Button } from './components/button.component';
import { MenuComponent } from './components/menu.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Button, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
