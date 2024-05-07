import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorys',
  standalone: true,
  imports: [RouterLink,
            RouterModule,
            CommonModule,
  ],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.css'
})
export class CategorysComponent {
  animals = [
    { name: 'Dogs', image: '../../assets/images/animal categorys/dog.png' },
    { name: 'Cats', image: '../../assets/images/animal categorys/cat.png' },
    { name: 'Birds', image: '../../assets/images/animal categorys/bird.png' },
    { name: 'Fishe', image: '../../assets/images/animal categorys/fis.png' },
    { name: 'Horses', image: '../../assets/images/animal categorys/horse.png' },
    { name: 'Cows', image: '../../assets/images/animal categorys/cow.png' },
    { name: 'Rabbits', image: '../../assets/images/animal categorys/rabbit.png' },
    { name: 'Hamsters', image: '../../assets/images/animal categorys/hamster.png' },
    { name: 'Ducks', image: '../../assets/images/animal categorys/duck.png' },
    { name: 'Goats and Sheeps', image: '../../assets/images/animal categorys/sheep.png' },
    { name: 'Chickens', image: '../../assets/images/animal categorys/chicken.png' },
    { name: 'Other Pets', image: '../../assets/images/animal categorys/OtherPets.png' }
  ];
}
