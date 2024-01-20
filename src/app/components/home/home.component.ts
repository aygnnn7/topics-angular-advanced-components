import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`
  <h3>Home Comp</h3>
  <div style="background-color: aqua;">
    <ng-content select="header"></ng-content>
    <ng-content select="body"></ng-content>
    <ng-content select="footer"></ng-content>
  </div>

  <table>
    <tr>
      <td style="background-color: blue;" ><ng-content select=".leftMenu"></ng-content> </td>
      <td style="background-color: orange;"><ng-content  select=".middleMenu"></ng-content> </td>
      <td style="background-color: green;"><ng-content  select=".rightMenu"></ng-content> </td>
    </tr>
    <tr style="background-color: red;"><ng-content></ng-content></tr>
  </table>
  `
})
export class HomeComponent {

}
