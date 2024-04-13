import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../login.service';
import { Login,LoginResponce } from '../Login.interface';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}
ngOnInit(): void {
  this.initForm();
}
initForm() {
  this.loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });   
}

loginResponce: LoginResponce = {};

  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value as Login).subscribe( async (res) => {
      this.loginResponce = res;
      localStorage.setItem("token", this.loginResponce.token??'');
      if(this.loginResponce.success){
        this.router.navigateByUrl("/home");
      }
      else{
        alert("Incorrect");
        
      }
    });
  }

  navigeteTo(path:string){
    this.router.navigateByUrl(path);
  }
}
