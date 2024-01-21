import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcontainerexample',
  standalone: true,
  imports: [NgIf, NgFor],
  template:`
  <h1>Ng-container comp</h1>\
  <!-- <ng-container>
    This is container's content
  </ng-container> -->

  
  <ul>
    <ng-container *ngFor="let product of products">
    <li *ngIf="product.available">{{[product.productName]}}</li> 
    </ng-container>
  </ul>


  `
})
export class NgcontainerexampleComponent {

  products: any[] =[
    {productName : "Pencil",available: true},
    {productName : "Notebook",available: true},
    {productName : "Duster",available: false},
    {productName : "Book",available: false},
    {productName : "Table",available: true},
    {productName : "Bin",available: false},
  ]
}
