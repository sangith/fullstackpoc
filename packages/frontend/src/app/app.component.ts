import { Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {}
