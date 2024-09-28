import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTermChanged = new EventEmitter<string>(); // Emit search term to parent
  searchTerm: string = ""; // Use lowercase 'string' instead of 'String'

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm']; // Correctly access searchTerm
        this.onSearch(); // Automatically search if there's a searchTerm in the params
      }
    });
  }

  onSearch(): void {
    this.searchTermChanged.emit(this.searchTerm); // Emit the search term to the parent component
    console.log(this.searchTerm); // Log for debugging
  }

  search(): void { // Corrected the function definition
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm); // Navigate with searchTerm
    }
  }
}
