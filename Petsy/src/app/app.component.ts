import { CarouselleComponent } from './carouselle/carouselle.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategorysComponent } from './categorys/categorys.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            HeaderComponent, 
            CarouselleComponent,
            CategorysComponent,
            FilterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Petsy';
}
