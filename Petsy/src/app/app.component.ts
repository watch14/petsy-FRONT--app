import { CarouselleComponent } from './carouselle/carouselle.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategorysComponent } from './categorys/categorys.component';
import { FilterComponent } from './filter/filter.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            HeaderComponent, 
            CarouselleComponent,
            CategorysComponent,
            FilterComponent,
            BlogsPageComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Petsy';
}
