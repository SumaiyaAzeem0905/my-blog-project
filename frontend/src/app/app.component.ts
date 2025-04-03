import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive , RouterOutlet, MatButtonModule, MatIconModule, MatToolbarModule,MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
    title = 'frontend';
  
    share(platform: string): void {
      const url = window.location.href;
      if (platform === 'mail') {
        window.location.href = `mailto:?subject=Check out My Blog App&body=Check out this app at ${url}`;
      } else if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=Check out My Blog App: ${url}`, '_blank');
      } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      }
    }
  }
  

