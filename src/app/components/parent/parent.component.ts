import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,NgTemplateOutlet],
  template: `
  <ng-template #t>
    Parent Ng-template content
  </ng-template>
   <app-child [childContainer]="t"></app-child>
  `
})
export class ParentComponent {

}
