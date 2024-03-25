import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../blog.interface';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BlogService } from '../blog.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule , MatCardModule , RouterModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {
  @Input()
  blog!: Blog;

  @Output()
  blogDeleted: EventEmitter<string> = new EventEmitter();

  constructor(
    private blogService: BlogService,
    private snackBar: MatSnackBar
  ) {}

  deleteBlog() {
    this.blogService.deleteBlog(this.blog.id || '').subscribe({
      next: () => {
        this.blogDeleted.emit(this.blog.id);
      },
      error: (err) => {
        this.snackBar.open('Something went wrong');
        console.log(err);
      },
    });
  }

}
