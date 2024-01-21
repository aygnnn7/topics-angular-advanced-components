import { Directive } from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective {

  constructor() { 
    console.log("example directive");
    

  }

}
