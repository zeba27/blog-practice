import { Injectable } from '@angular/core';
import { Blog } from './blog.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private baseUrl = 'http://localhost:3000/blogs/';

  constructor(private httpClient: HttpClient) {}
  
//this function returns observable type blog array
  
  getAllBlogs(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.baseUrl);
  }

  addBlog(payload: Blog) {
    return this.httpClient.post(this.baseUrl, { ...payload, Status: 'Updated' });
  }

  deleteBlog(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }

  
}
