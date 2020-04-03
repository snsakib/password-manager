import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm = this.fb.group({
    fullName: [''],
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
