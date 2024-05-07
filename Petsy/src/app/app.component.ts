import { RouterLink, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent,
            HeaderComponent,
            RouterModule,
            RouterLink,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Petsy';
}
