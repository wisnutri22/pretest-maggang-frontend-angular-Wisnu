import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/tag';  // Assuming Tag is defined in shared/models/tag.ts

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // Get all foods
  getAll(): Food[] {  
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Cepat Saji', 'Pizza', 'Makan Siang'],
      },
      {
        id: 2,
        name: 'Bakso',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Timur Tengah', 'China'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Makanan Berat', 'Makan Siang'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['German', 'Amerika'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Cepat Saji', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Kentang Goreng',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgia', 'Prancis'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Cepat Saji', 'Goreng'],
      },
      {
        id: 5,
        name: 'Sup Ayam',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Makanan Berat', 'Sup'],
      },
      {
        id: 6,
        name: 'Pizza Dengan Sayur',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Cepat Saji', 'Pizza', 'Makan Siang'],
      },
    ]; 
  }

  // Method to get foods by tag
  getAllFoodsByTag(tag: string): Food[] {
    return tag.toLowerCase() === 'all'
      ? this.getAll()
      : this.getAll().filter(food =>
          food.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
        );
  }

  // Method to get all unique tags
  getAllTags(): Tag[] {
    const allFoods = this.getAll();
    const allTags: string[] = [];

    allFoods.forEach(food => {
      food.tags?.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);  // Collect unique tags
        }
      });
    });

    // Return a list of tags, assuming Tag has a name and count
    return allTags.map(tag => ({
      name: tag,
      count: allFoods.filter(food => food.tags?.includes(tag)).length,
    }));
  }
}
