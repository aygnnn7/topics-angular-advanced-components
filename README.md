# Angular - My Notes 4  
# Advanced Components
## What is `ng-content`?
`ng-content` is a feature in Angular that enables the transfer of HTML content from a parent component to a child component. It allows for dynamic rendering and creation of external templates by transferring and rendering HTML content from parent to child.

### Multiple `ng-content`'s
When using multiple `ng-content` elements, they can be distinguished by using the `select` attribute with specific names. Names like `header`, `body`, and `footer` are special identifiers for `ng-content` and can be used directly with corresponding tags in the parent component.

Example usage in the parent App Component:
```html
<app-home>
    <header> This is header's content. </header>
    <body> This is body's content. </body>
    <footer>This is footer's content.</footer>
</app-home>
```
And in the child Home Component:
```html
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
```html
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

## What is `ng-container`?
`ng-container` is a feature in Angular that allows for the creation of a section or area on a webpage without dealing with HTML elements. It's a syntax element that is not a directive, component, class, or interface. `ng-container` does not correspond to any HTML element when rendered. It is often used alongside directives like ngIf, ngFor, etc. For example, in the code snippet below, using `ng-container` instead of `span` elements keeps the outputted source code cleaner, especially for products where `available` is `false`.

```javascript
products: any[] = [
    {productName : "Pencil", available: true},
    {productName : "Notebook", available: true},
    {productName : "Duster", available: false},
    {productName : "Book", available: false},
    {productName : "Table", available: true},
    {productName : "Bin", available: false},
]
```

```javascript
<ul>
    <ng-container *ngFor="let product of products">
        <li *ngIf="product.available">{{product.productName}}</li> 
    </ng-container>
</ul>
```

## What is `ng-template`?
`ng-template`, like `ng-container`, allows for creating sections or areas on a page without adding to the DOM. The main difference with `ng-template` is that even when it is rendered, the HTML elements inside it are not processed onto the DOM unless explicitly called. `ng-template` must be deliberately made visible using `ngTemplateOutlet` directive and `TemplateRef` & `ViewContainerRef` objects.

Example using `ngTemplateOutlet`:
```html
<ng-container *ngTemplateOutlet="test">
    Ng-Container content
</ng-container>
<ng-template #test>
    Ng Template content
</ng-template>
```
Here, the content of `ng-template` overwrites the content of `ng-container`.

Example using `TemplateRef` and `ViewContainerRef`:
```javascript
@ViewChild("test", {static:false, read:TemplateRef}) _ngTemplate: TemplateRef<any>;

constructor(private viewContainerRef: ViewContainerRef) {}

ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this._ngTemplate)
}
```
This method displays the `ng-template` object by referencing it from the component class.

### Usage Scenarios
`ng-template` should be used for displaying templates based on if-else conditions.
```html
<div *ngIf="value; then template1 else template2">
</div> 
<ng-template #template1> Template 1 Content </ng-template>
<ng-template #template2> Template 2 Content </ng-template>
```
It can also be used in listing processes where repeated structures or scenarios involving switch-case constructs are needed.
