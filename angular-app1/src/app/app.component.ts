import { Component } from '@angular/core';

@Component({
  selector: 'app-kashaer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name ='Kashaer';

  current_user:object = {
  	'name': 'Kashaer',
  	'email': 'kashaer@kashaer.com'
  };

  users:object[] = [
      {'name': 'Kawser', 'email': 'Kawser@kawser.com'},
      {'name': 'Jasur' , 'email': 'Jasur@jasur.com'}     
  ];

  myDefaultStyle:object = {
  	'background': 'blue'
  }

  mySwitch:boolean = true;

  activateSwitch():void {
  	this.mySwitch = !this.mySwitch;
  }

    doSomething() {
  	return 'Kashaer Never Give Up!'
  }
}













