import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
