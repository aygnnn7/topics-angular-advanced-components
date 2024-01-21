import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgcontainerexampleComponent } from './components/ngcontainerexample/ngcontainerexample.component';
import { NgtemplateexampleComponent } from './components/ngtemplateexample/ngtemplateexample.component';
import { ImplicitExampleComponent } from './components/implicit-example/implicit-example.component';
import { ParentComponent } from './components/parent/parent.component';
import { C1Component } from './components/c1/c1.component';
import { ExampleDirective } from './components/directives/example.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent, 
    NgcontainerexampleComponent,
    NgtemplateexampleComponent,
    ImplicitExampleComponent,
    ParentComponent,
    C1Component, 
    ExampleDirective],
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
    <hr>
    <app-ngtemplateexample></app-ngtemplateexample>
    <hr>
    <app-implicit-example></app-implicit-example>
    <!-- <hr>
    <app-parent></app-parent> -->
    <hr>
    <app-c1 #c1></app-c1>
    <hr>
    <h1 #h appExample>ViewChildExample</h1> 
  `
})
export class AppComponent {
 
  @ViewChild("c1") _c1Component1 :C1Component;
  @ViewChild(C1Component, {static: true}) _c1Component2 :C1Component;
  
  @ViewChild("h") _h1:ElementRef;
  @ViewChild("h", {read: ElementRef}) _h2: ElementRef;
  @ViewChild("h", {read: ExampleDirective}) _h3: ExampleDirective;
  
  @ViewChild(C1Component, {static: true, read: "example"}) _c1Component3 :string;
  
  
  ngOnInit(){
    
    console.log(this._c1Component2);
    
  }
  ngAfterViewInit(){
    console.log(this._c1Component1)
    console.log(this._c1Component2);
    
    console.log(this._h1);
    console.log(this._h2);
    console.log(this._h3);
    
    console.log(this._c1Component3);
  }

  

  
}
