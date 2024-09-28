import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router'; // Import routing
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component'; // Import your HomeComponent

// Define your routes here
const routes: Routes = [
  { path: '', component: HomeComponent },               // Root path
  { path: 'search/:searchTerm', component: HomeComponent }, // Search route
  { path: 'tag/:tag', component: HomeComponent }        // Tag route
];

// Bootstrap the application with routing and configuration
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes)  // Provide the router with the defined routes
  ]
}).catch((err) => console.error(err));
