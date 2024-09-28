import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/tag';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = []; // Initialize your tags array
  
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags(); // Corrected to call the method
  }
}
