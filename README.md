# Angular - My Notes 4  
# Advanced Components
## What is `ng-content`?
`ng-content` is a feature in Angular that enables the transfer of HTML content from a parent component to a child component. It allows for dynamic rendering and creation of external templates by transferring and rendering HTML content from parent to child.

## Multiple `ng-content`'s
When using multiple `ng-content` elements, they can be distinguished by using the `select` attribute with specific names. Names like `header`, `body`, and `footer` are special identifiers for `ng-content` and can be used directly with corresponding tags in the parent component.

Example usage in the parent App Component:
```javascript
<app-home>
    <header> This is header's content. </header>
    <body> This is body's content. </body>
    <footer>This is footer's content.</footer>
</app-home>
```
And in the child Home Component:
```javascript
<ng-content select="header"></ng-content>
<ng-content select="body"></ng-content>
<ng-content select="footer"></ng-content>
```

For custom naming (a common practice), CSS selectors can be used as follows:
In the parent App Component:
```javascript
<app-home>
    <div class="leftMenu"> This is left menu's content.</div>
    <div class="middleMenu"> This is middle menu's content.</div>
    <div class="rightMenu"> This is right menu's content.</div>
    
    Not attached content
</app-home>
```
In the child Home Component:
```javascript
<table>
    <tr>
      <td style="background-color: blue;"><ng-content select=".leftMenu"></ng-content></td>
      <td style="background-color: orange;"><ng-content select=".middleMenu"></ng-content></td>
      <td style="background-color: green;"><ng-content select=".rightMenu"></ng-content></td>
    </tr>
    <tr style="background-color: red;"><ng-content></ng-content></tr>
</table>
```
To project unselected content to a default location, as shown above, creating an empty `ng-content` is sufficient. 