import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-carouselle',
  standalone: true,
  imports: [RouterLink,
            RouterModule,
  ],
  templateUrl: './carouselle.component.html',
  styleUrl: './carouselle.component.css'
})
export class CarouselleComponent {

}
