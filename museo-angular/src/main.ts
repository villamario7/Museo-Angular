import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importa el AppComponent standalone

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
