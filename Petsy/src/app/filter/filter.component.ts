import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  pets: { petPicture: string, petName: string, petGender: string, isFavorite: boolean }[] = [
    { petPicture: "../../assets/images/pet_pics/pet (1).png", petName: "Pomeranian White", petGender: "Male", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (2).png", petName: "Poodle Tiny Yellow", petGender: "Female", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (3).png", petName: "Poodle Tiny Sepia", petGender: "Male", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (4).png", petName: "Poodle Tiny Dairy Cow", petGender: "Female", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (5).png", petName: "Pomeranian White", petGender: "Male", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (6).png", petName: "Pembroke Corgi Cream", petGender: "Female", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (7).png", petName: "Alaskan Malamute Grey", petGender: "Male", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (8).png", petName: "Pembroke Corgi Tricolor", petGender: "Female", isFavorite: false },
    { petPicture: "../../assets/images/pet_pics/pet (9).png", petName: "Pomeranian White", petGender: "Male", isFavorite: false }
  ];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      // Load favorite status from local storage
      const storedPetsJson = localStorage.getItem('pets');
      console.log('Stored Pets:', storedPetsJson); // Log the content of localStorage
      if (storedPetsJson !== null) {
        const storedPets = JSON.parse(storedPetsJson);
        if (Array.isArray(storedPets) && storedPets.length === this.pets.length) {
          this.pets.forEach((pet, index) => {
            if (storedPets[index] && storedPets[index].isFavorite) {
              pet.isFavorite = true;
            }
          });
        }
      }
    }
  }

  toggleFavorite(pet: any) {
    // Toggle favorite status
    pet.isFavorite = !pet.isFavorite;
    // Update local storage
    localStorage.setItem('pets', JSON.stringify(this.pets));
  }
}