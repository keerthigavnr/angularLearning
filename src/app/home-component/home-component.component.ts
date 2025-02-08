import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  loginData: any = {}

  submitted: boolean = false;

  submitForm(form: any, loginData: any) {
    if (form.valid) {
      console.log("submitted form is valid");
    }
    else {
      this.submitted = true;
      console.log("submitted form is invalid");
    }
  }

}
