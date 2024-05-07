import { HomePageComponent } from './home-page/home-page.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent,

          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Petsy';
}
