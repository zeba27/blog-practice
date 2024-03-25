import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'blog-details',component:BlogDetailsComponent},
    {path:'add-blog',component:AddBlogComponent},
    {path:'home',component:HomeComponent},
];
