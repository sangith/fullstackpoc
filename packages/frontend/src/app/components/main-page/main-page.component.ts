import { Component } from '@angular/core';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderBarComponent, NavBarComponent, DashboardComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {} 