/// <reference path="../typings/whatwg-fetch.d.ts" />
// typescript definitie voor fetch. VS Code herkent d.ts files automatisch, webstorm niet getest


import { Component } from '@angular/core';

@Component({
  selector: 'actor-list',
  templateUrl: './app/actorlist.component.html',
  styleUrls: ['./app/actorlist.component.css']
})
export class ActorListComponent  {
  
  constructor() {
  }

  clearResults() {
  }

  searchActor(){
      fetch(`http://swapi.co/api/people/1/`)
        .then(res => res.json())
        .then(res => {
          console.log("found something");
          console.log(res);
          // voeg het resultaat toe aan de collectie
        })
  }
}
