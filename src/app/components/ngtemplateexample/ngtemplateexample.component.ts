import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplateexample',
  standalone: true,
  imports: [NgTemplateOutlet],
  template:`
  <hr>
  <ng-container [ngTemplateOutlet]="test" 
                [ngTemplateOutletContext]="{x : 123, y : 3, $implicit:000}">
    Ng-Container content
  </ng-container>
  <ng-template #test let-x="x" let-y="y" let-z>
  
    <br>
    {{x}},{{y}},{{z}}
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
