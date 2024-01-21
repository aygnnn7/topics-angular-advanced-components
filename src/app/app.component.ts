import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgcontainerexampleComponent } from './components/ngcontainerexample/ngcontainerexample.component';
import { NgtemplateexampleComponent } from './components/ngtemplateexample/ngtemplateexample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgcontainerexampleComponent,NgtemplateexampleComponent],
  template:`
    <h1>App Comp</h1>
    <app-home>
      This is ng-content's content.
      <header> This is header's content. </header>
      <body> This is body's content. </body>
      <footer>This is footer's content.</footer>

      <div class="leftMenu"> This is left menu's content.</div>
      <div class="middleMenu"> This is middle menu's content.</div>
      <div class="rightMenu"> This is right menu's content.</div>

      Not attached content
    </app-home>
    <hr>
    <app-ngcontainerexample></app-ngcontainerexample>
    <app-ngtemplateexample></app-ngtemplateexample>
  `
})
export class AppComponent {
  title = 'proj4';
}
