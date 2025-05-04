import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submission-status',
  standalone: true,
  templateUrl: './submission-status.component.html',
  styleUrls: ['./submission-status.component.scss']
})
export class SubmissionStatusComponent {
  @Output() submitNewManuscript = new EventEmitter<void>();
} 