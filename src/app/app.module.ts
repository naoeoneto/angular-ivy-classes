import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { GameGridComponent } from './gamegrid/gamegrid.component';
import { Button } from './components/button.component';
import { MenuComponent } from './components/menu.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Button, MenuComponent, EntryDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
