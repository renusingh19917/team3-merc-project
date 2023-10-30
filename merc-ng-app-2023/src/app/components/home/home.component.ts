import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html',
})
export class HomeComponent {


}

// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-home',
//     templateUrl: './home.component.html',
//     // template: `<p>This is home component. abc</p>`
//     // styles: [`p {color: 'blue'}`]
// })
// export class HomeComponent {

//     firstName: string = 'Sonu'; // from database
//     lastName: string = 'Singh';
//     empData = { eid: 101, firstName: 'Monu' };
//     userData: string = '';

//     salary: number = 100;

//     increaseSalary = () => {
//         this.salary += 1;
//     };

//     imageSource: string = 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80';


// }


// data binding

// template (HTML)     component (Script)

//   display here    <--   send from here

// interpolation - component to template {{data}}
// property binding - component to template [property]="data"
// event binding - template to component (event)="expression"
// two-way binding - two way  [(ngModel)]="data"

// pipe -
// data transformation -
// https://angular.io/guide/pipes


// decorator

// directives - give instruction to DOM
// directives - 3 types
// structural directives - *ngIf, *ngFor, *ngSwitch, ...
// attribute directives - *ngStyle, *ngClass, ...
// custom directives - components 





