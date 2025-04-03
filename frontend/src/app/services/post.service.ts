import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data:any){
    return this.http.post(BASIC_URL + "api/posts/createPost", data);
  }
  getAllPosts(): Observable<any>{
    return this.http.get(BASIC_URL + "api/posts");
  }
  getPostById(postId: number): Observable<any> {
    console.log(`inside post service, postid is ${postId}`); // Correct logging
    return this.http.get(`${BASIC_URL}api/posts/${postId}`);  // Correct interpolation
  }
  likePost(postId: number): Observable<any> {
    console.log(`inside post service like post(), postid is ${postId}`); // Correct logging
    return this.http.put(`${BASIC_URL}api/posts/like/${postId}`, null, {responseType: 'text'});  // Correct interpolation
  }

  searchByName(name: String): Observable<any>{
    return this.http.get(`${BASIC_URL}api/posts/search/${name}`);
  }
  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${BASIC_URL}api/posts/delete/${postId}`);

  }
  
  updatePost(postId: number, post: any): Observable<any> {
    return this.http.put(`${BASIC_URL}api/posts/update/${postId}`, post);
}
}
