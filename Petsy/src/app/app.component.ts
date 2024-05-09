import { RouterLink, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent,
            HeaderComponent,
            RouterModule,
            RouterLink,
            FooterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Petsy';
}
