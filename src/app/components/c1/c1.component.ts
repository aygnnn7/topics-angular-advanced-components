import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [],
  template: `C1 Component`,
  providers:[
    {provide: "example", useValue: "hello"}
  ]
})
export class C1Component {
  x(){
    console.log("c1 function");
  }
}
