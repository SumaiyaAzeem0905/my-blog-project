import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms'; // For ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // For Material form fields
import { MatInputModule } from '@angular/material/input'; // For Material input fields
import { MatButtonModule } from '@angular/material/button'; // For Material buttons
@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [FormsModule, // For ngModel
    MatFormFieldModule, // Material form fields
    MatInputModule, // Material input fields
    MatButtonModule ],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent implements OnInit {


    post: any = {};

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private router: Router
    ) {}

    ngOnInit(): void {
      const postId = this.route.snapshot.paramMap.get('id');
      if (postId) {
        this.postService.getPostById(+postId).subscribe({
          next: (data) => {
            this.post = data;
          },
          error: (err) => {
            console.error('Error fetching post:', err);
            alert('Error fetching post.');
            this.router.navigate(['/view-all']);
          }
        });
      }
    }
    

    onSubmit(): void {
        this.postService.updatePost(this.post.id, this.post).subscribe({
            next: () => {
                alert('Post updated successfully!');
                this.router.navigate(['/view-all']);
            },
            error: (err) => {
                console.error('Error updating post:', err);
                alert('Error updating post.');
            }
        });
    }

}
