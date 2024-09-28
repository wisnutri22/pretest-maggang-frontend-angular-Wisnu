import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { Tag } from '../shared/tag'; // Import Tag interface
import { TagsComponent } from '../tags/tags.component'; // Import TagsComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, TagsComponent], // Include TagsComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  tags: Tag[] = []; // Declare tags array

  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        // Search by term
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      } else if (params['tag']) {
        // Filter by tag
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        // Load all foods if no search term or tag is provided
        this.foods = this.foodService.getAll();
      }

      this.tags = this.foodService.getAllTags(); // Fetch tags here
    });

    console.log(this.foods); // Log to ensure foods are populated
    console.log(this.tags); // Log to ensure tags are populated
  }
}
