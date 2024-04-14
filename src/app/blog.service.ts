import { Injectable } from '@angular/core';
import { Blog } from './blog.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private baseUrl = 'http://localhost:3000/blogs';

  constructor(private httpClient: HttpClient) {}
  
//this function returns observable type blog array
  
  getAllBlogs(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.baseUrl,{ headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  addBlog(Blog: Blog) {
    return this.httpClient.post(this.baseUrl, Blog, { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  deleteBlog(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id, { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  
}
