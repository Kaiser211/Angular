import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component - Events';
  myName = 'Kashaer';

  users: object[] = [];

  newUser: object = {
  	 name: '',
  	 email: ''
  };

  clickedButton(){
       console.log("You clicked a button");
}
  addUserToDB(){
  	this.users.push(this.newUser);
  }

  resetNewUser(){
  	this.newUser = {
  		name: '',
 		email: ''
 	};
  }
 submitForm(){
 	this.addUserToDB();
 	this.resetNewUser();
 // 	// make an AJAX request to the DB Server
 // 	this.users.push(this.newUser);
 // 	console.log(this.users);
 // 	this.newUser = {
 // 		name: '',
 // 		email: ''
 // 	};
 // }
}
