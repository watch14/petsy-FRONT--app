import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CarouselleComponent } from '../carouselle/carouselle.component';
import { CategorysComponent } from '../categorys/categorys.component';
import { FilterComponent } from '../filter/filter.component';
import { BlogsPageComponent } from '../blogs-page/blogs-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterModule,
            HeaderComponent, 
            CarouselleComponent,
            CategorysComponent,
            FilterComponent,
            BlogsPageComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
