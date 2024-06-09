import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-page',
  standalone: true,
  imports: [CommonModule],
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



}
