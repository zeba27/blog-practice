import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'blog-details',component:BlogDetailsComponent, canActivate: [AuthService]},
    {path:'add-blog',component:AddBlogComponent,canActivate: [AuthService]},
    {path:'home',component:HomeComponent,canActivate: [AuthService]},
];
