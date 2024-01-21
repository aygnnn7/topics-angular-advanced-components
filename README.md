# Angular - My Notes 4  
# Advanced Components
## What is `ng-content`?
`ng-content` is a feature in Angular that enables the transfer of HTML content from a parent component to a child component. It allows for dynamic rendering and creation of external templates by transferring and rendering HTML content from parent to child.

### Multiple `ng-content`'s
When using multiple `ng-content` elements, they can be distinguished by using the `select` attribute with specific names. Names like `header`, `body`, and `footer` are special identifiers for `ng-content` and can be used directly with corresponding tags in the parent component.

Example usage in the parent App Component:
```jtml
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
```html
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

```html
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

## ViewChild
`ViewChild` is a decorator in Angular that represents DOM elements within a component class. The targeted element is typically captured as an `ElementRef` or as the component itself. `ViewChild` can also reference components identified by selectors.

Suppose we have the following component definition in HTML:
```html
<app-c1 #c1></app-c1>
```
We can represent and interact with this component in the class using either the `#c1` template reference variable or the direct selector reference:
```javascript
@ViewChild("c1") _c1Component1: C1Component;
@ViewChild(C1Component) _c1Component2: C1Component;

ngAfterViewInit() {
    console.log(this._c1Component1);
    console.log(this._c1Component2);
    this._c1Component1.x();
    this._c1Component2.x();
}
```
Note: If multiple `app-c1` selectors are used, the first `app-c1` found in the component class will be used.

### ViewChild static parameter
The `static` parameter indicates whether the referenced object is present from the moment the page is initialized. Setting this parameter to `false` suggests that Angular will look for the object after the page has loaded, meaning it's conditionally dependent.

### ViewChild - Read Option
Consider an HTML input element like this:
```html
<input type="text" #txtInput appExample [(ngModel)]="data">
```
When referencing this input element with ViewChild, it can be represented as an `ElementRef` due to its nature, as `NgModel` due to the `ngModel` directive, as `ExampleDirective` due to the `appExample` directive, or as `ViewContainerRef` because it's a view container.

Example:
```html 
<h1 #h appExample>ViewChildExample</h1> 
```

```javascript
@ViewChild("h") _h1: ElementRef;
@ViewChild("h", {read: ElementRef}) _h2: ElementRef;
@ViewChild("h", {read: ExampleDirective}) _h3: ExampleDirective;
```

The `read` parameter can also be used to inject a value provided in the child component.

Example using the "example" injection token in the `child` component's providers to get the `hello` value from the `parent` component:
```javascript
@ViewChild(C1Component, {static: true, read: "example"}) _c1Component3: string;
```

## ViewChildren
- While `ViewChild` references only the first matching instance of the specified element, `ViewChildren` captures all instances of the element as a `QueryList`.
- `ViewChildren` does not have a static parameter.
- `ViewChildren` also allows for the injection of providers from child components cumulatively, resulting in a collection that is still a `QueryList`.

### QueryList - changes Property
When using the `ViewChildren` decorator, you can subscribe to the `changes` property of the `QueryList` to track additions or removals of elements on the page. This provides an efficient way to observe and react to dynamic changes in the DOM.