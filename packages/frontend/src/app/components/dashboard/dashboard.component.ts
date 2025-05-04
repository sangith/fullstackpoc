import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorMainMenuComponent } from '../author-main-menu/author-main-menu.component';
import { SubmissionStatusComponent } from '../submission-status/submission-status.component';
import { AuthorResourcesComponent } from '../author-resources/author-resources.component';
import { ArticleTypeSubmissionFlowComponent } from '../article-type-submission-flow/article-type-submission-flow.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AuthorMainMenuComponent, SubmissionStatusComponent, AuthorResourcesComponent, ArticleTypeSubmissionFlowComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showArticleTypeFlow = false;
} 