# Introduction

Detecting Online/Offline Internet connection in Angular

# Installation

### npm
```js
npm install ng-connection --save
```

# Usage

### Inject `NgConnection`

You need to Inject the `NgConnection` service in the component of your app where you want to use it.
After that Subscribe to `connectivity()` method to get the current status of the internet connection.

```js
import { Component } from '@angular/core';
import { NgConnection } from 'ng-connection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _ngConnection: NgConnection) {}

  ngOnInit() {
    this._ngConnection.connectivity().subscribe(status => {
      console.log('Connected', status);
    });
  }

}
```

### Configuration
It can be configured to report the current network status also by providing the boolean value to the `connectivity()` method.

```js
.connectivity(true | false)
true: (Default) Report the current status.
false: Start reporting once the status change.


this._ngConnection.connectivity(true).subscribe(status => {
    // status: true | false
    console.log('Reporting current status', status);
});

this._ngConnection.connectivity(false).subscribe(status => {
    // status: true | false
    console.log('Reporting once the status change', status);
});

```




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
