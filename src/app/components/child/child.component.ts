import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgTemplateOutlet, ParentComponent],
  template:`
  <ng-container *NgTemplateOutlet="childContainer">
    Child Ng-container content
  </ng-container>
  `
})
export class ChildComponent {
@Input() childContainer: TemplateRef<HTMLElement>;
@ContentChild("templateVariable") _input : ElementRef;

ngAfterContentInit(){
  console.log(this._input);
}
}
