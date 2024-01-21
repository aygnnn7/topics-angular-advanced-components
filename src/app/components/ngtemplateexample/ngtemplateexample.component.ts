import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplateexample',
  standalone: true,
  imports: [NgTemplateOutlet],
  template:`

  <ng-container *ngTemplateOutlet="test">
    Ng-Container content
  </ng-container>
  <ng-template #test>
    Ng Template content
  </ng-template>
  
  `
})
export class NgtemplateexampleComponent implements AfterViewInit{
@ViewChild("test", {static:false, read:TemplateRef}) _ngTemplate: TemplateRef<any>;

constructor(private viewContainerRef:ViewContainerRef){
  
}

ngAfterViewInit(){
  this.viewContainerRef.createEmbeddedView(this._ngTemplate)
}
}
