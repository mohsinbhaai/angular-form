import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  form = new FormGroup(
    {username: new FormControl('', [
      Validators.required,
        Validators.minLength(3)
      ]), password: new FormControl('', Validators.required)});
  get username() {
    return this.form.get('username');
  }
}
