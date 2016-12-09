import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<main>
          <h2>{{ title }}</h2>
        </main>
        <footer>
          <p>
            <a href="https://angular.io/docs/ts/latest/quickstart.html">Angular 2 Quickstart</a><br>
            <a href="https://angular.io/docs/ts/latest/guide/cheatsheet.html">Angular 2 Cheat Sheet</a><br>
            <a href="https://www.typescriptlang.org/docs/tutorial.html">Typescript</a>
          </p>
        </footer>`,
})
export class AppComponent  { title = 'Workshop Angular 2 met Typescript'; }
