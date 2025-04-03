import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IncomingPost } from '../../models/incoming-post.model';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [MatCardModule, MatGridList, MatGridTile, MatButtonModule, MatIcon, DatePipe, RouterLink],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {

  allPosts: IncomingPost[] = [];

  constructor(private postService: PostService, private snackBar: MatSnackBar,private router: Router) {this.getAllPosts();}


  getAllPosts(){
    this.postService.getAllPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.allPosts = res;
      },
      error: (error) => {
        this.snackBar.open('There was an error getting all the posts', 'Error', {duration: 3000});
        console.log(error);
      }
    });
  }
  updatePost(post: IncomingPost): void {
    // Navigate to the update page with the post ID
    this.router.navigate(['/update-post', post.id]);
  }
  deletePost(postId: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(postId).subscribe({
        next: () => {
          this.snackBar.open('Post deleted successfully', 'Close', { duration: 3000 });
          // Remove the deleted post from the list
          this.allPosts = this.allPosts.filter(post => post.id !== postId);
        },
        error: (any: any) => {
          this.snackBar.open('Error deleting post', 'Close', { duration: 3000 });
          console.error(any);
        }
      });
    }
  }
}
