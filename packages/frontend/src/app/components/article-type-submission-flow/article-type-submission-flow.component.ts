import { Component } from '@angular/core';
import { StepProgressComponent } from '../step-progress/step-progress.component';
import { ArticleTypeSelectionComponent } from '../article-type-selection/article-type-selection.component';

@Component({
  selector: 'app-article-type-submission-flow',
  standalone: true,
  imports: [StepProgressComponent, ArticleTypeSelectionComponent],
  template: `
    <app-step-progress></app-step-progress>
    <app-article-type-selection></app-article-type-selection>
  `,
})
export class ArticleTypeSubmissionFlowComponent {} 