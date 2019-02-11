import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../services/authentication.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  loginform: FormGroup;
  submitted = false;


  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder) {
      this.loginform = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
     }

     onSubmit() {
      this.submitted = true;

      this.authService.login(this.username, this.password);

      // stop here if form is invalid
      // by the lets comment it to proceed.
      // if (this.loginform.invalid) {
      //     console.log('invalid');
      //     return;
      // }

  }
  ngOnInit() {
  }

}
