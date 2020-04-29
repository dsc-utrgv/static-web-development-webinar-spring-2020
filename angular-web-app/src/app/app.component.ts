import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-web-app';
  helloMsg = "Hi My name is Subba!"
  label_name = "My First Name";
  credentials: any = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "subba@g.com",
    password: "jndjbcdbcdj"
  };

  ngOnInit(){

  }

  register(){
    console.log(this.credentials)
  }
}
