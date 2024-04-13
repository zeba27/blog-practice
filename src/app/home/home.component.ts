import { Component, OnInit } from '@angular/core';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.interface';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {Router, RouterLink,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogDetailsComponent , MatButtonModule , MatIconModule, CommonModule, MatInputModule , MatFormFieldModule , FormsModule , RouterModule,  RouterLink, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  allBlogs: Blog[] = [];
  id!: string;

  constructor(private blogService: BlogService,private router:Router) {}
  ngOnInit() {
    this.blogService.getAllBlogs().pipe(take(1)).subscribe(async (res) => {
      this.allBlogs = res;
      console.log(this.allBlogs);
    });
  }
  
  deleteBlog(id: string) {
    this.allBlogs = this.allBlogs.filter((blog) => blog._id !== id);
  }

  logOut(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
}
