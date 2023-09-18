import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  keyDisplay = "visibility:hidden";
  currentTeam = "Red";
  teamTextClass = "redtext";
  winningMessage = "";

  ngOnInit() {
  }

  displayWinner(team) {
    this.winningMessage = team + ' won!'
  }

  setRedTeam() {
    this.currentTeam = "Red";
    this.teamTextClass = "redtext";
  }

  setBlueTeam() {
    this.currentTeam = "Blue";
    this.teamTextClass = "bluetext";
  }

  toggleKey() {
    if(this.keyDisplay === "") {
      this.keyDisplay = "visibility:hidden";
    } else {
      this.keyDisplay = "";
    }
  }


}
