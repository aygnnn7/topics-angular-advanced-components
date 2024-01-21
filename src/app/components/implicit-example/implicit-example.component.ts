import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-implicit-example',
  standalone: true,
  imports: [NgFor,NgTemplateOutlet],
  template:`
   <h1>Implict Example Comp</h1>
   <ng-container *ngTemplateOutlet="t; context: {$implicit: person}">

   </ng-container>
   <ng-template #t let-person>
    <ul>
      <li *ngFor="let _person of person">{{[_person.personName]}}</li>
    </ul>
   </ng-template>



   `
})
export class ImplicitExampleComponent {
  person : any[] =[
    {personName: 'Jack', age:32},
    {personName: 'Jones', age:34},
    {personName: 'Tommy', age:35},
    {personName: 'John', age:36},
    {personName: 'Johnny', age:37}
  ]
}
