import {Component} from 'angular2/core';
interface Person {
    id: number;
    name: string;
    webpage: string;
}

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
            <h2>I'm {{person.name}}!</h2>
            <div>Website : <a href="{{person.webpage}}">{{person.webpage}}</a></div>
            <div>
                <label>name : </label>
                <div><input [(ngModel)]="person.name" placeholder="name"></div><br/>
                <label>webpage : </label>
                <div><input [(ngModel)]="person.webpage" placeholder="webpage"></div>
            </div>
              `
})
export class AppComponent {
    public title = 'My First Angular 2 App';
    public person: Person = {
        id: 1,
        name: 'theline',
        webpage: 'http://www.theline13.com'
    };
}