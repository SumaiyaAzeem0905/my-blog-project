import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';
import { LikedPostsComponent } from './pages/liked-posts/liked-posts.component';
import { UpdatePostComponent } from './pages/update-post/update-post.component';
export const routes: Routes = [
  {path: 'create-post', component: CreatePostComponent},
  {path: 'view-all', component: ViewAllComponent},
  {path: 'view-post/:id', component: ViewPostComponent},
  {path: 'search-by-name', component: SearchByNameComponent},
  { path: 'liked-posts', component: LikedPostsComponent },
  { path: 'update-post/:id', component: UpdatePostComponent }
  
];
