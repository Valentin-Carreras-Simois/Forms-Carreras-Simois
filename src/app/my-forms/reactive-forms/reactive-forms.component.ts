import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface UserModel {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  city: FormControl<string | null>;
}


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('');
  cityControl = new FormControl('', [Validators.required]);

  userModel: FormGroup<UserModel> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    city: this.cityControl,
  });

}
