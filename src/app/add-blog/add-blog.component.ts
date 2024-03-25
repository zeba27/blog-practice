import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder,ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule,],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.scss'
})
export class AddBlogComponent {
  categoriesOfBlog= ['Sports', 'Entertainment', 'Business' , 'Health'];
  title: any;
  
    constructor(
      private formBuilder: FormBuilder,
      private blogService: BlogService,
      private router: Router
    ) {}
    blogForm = this.formBuilder.group({
      title: '',
      userName: '',
      description: '',
      category: '',
      status: '',
    });
  
    addBlog() {
      this.blogService.addBlog(this.blogForm.value as Blog).subscribe((res) => {
        this.router.navigateByUrl('/home');
      });
    }
}
