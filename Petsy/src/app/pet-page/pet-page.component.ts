import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-pet-page',
  standalone: true,
  imports: [CommonModule, NgImageSliderModule],
  templateUrl: './pet-page.component.html',
  styleUrl: './pet-page.component.css'
})
export class PetPageComponent {
  about = ["Breed", "Age", "Gender", "Color", "Health Status", "Temperament", "Size"]
  aboutInfo = ["Labrador Retriever", "2 months", "Male", "White", "Vaccinated", "Playful ...", "Small"]

  owner: {icone: string, ownerInfo: string}[] = [
    {icone : "../../assets/images/vectors/account.svg", ownerInfo : "Monsef Bay"},
    {icone : "../../assets/images/vectors/location.svg", ownerInfo :"123 Jasmine Street, Tunis, Tunisia"},
    {icone : "../../assets/images/vectors/call.svg", ownerInfo : "+217 27 600 300"}
  ];

  name = 'Angular';
  imageObject = [{
      image: '../../assets/images/pet_pics/pet (1).png',
      thumbImage: '../../assets/images/pet_pics/pet (1).png',
  }, {
      image: '../../assets/images/pet_pics/pet (2).png',
      thumbImage: '../../assets/images/pet_pics/pet (2).png'
  }, {
    image: '../../assets/images/pet_pics/pet (3).png',
    thumbImage: '../../assets/images/pet_pics/pet (3).png',
  },{
    image: '../../assets/images/pet_pics/pet (4).png',
    thumbImage: '../../assets/images/pet_pics/pet (4).png',
  }];

  
}
