import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

export interface SubmissionCounts {
  newSubmissions: {
    sentBackToAuthor: number;
    incomplete: number;
    waitingForApproval: number;
    beingProcessed: number;
  };
  revisions: {
    needingRevision: number;
    sentBackToAuthor: number;
    incomplete: number;
    waitingForApproval: number;
    beingProcessed: number;
    declined: number;
  };
  completed: {
    withDecision: number;
  };
}

@Component({
  selector: 'app-submission-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './submission-status.component.html',
  styleUrls: ['./submission-status.component.scss']
})
export class SubmissionStatusComponent {
  @Input() counts: SubmissionCounts = {
    newSubmissions: {
      sentBackToAuthor: 0,
      incomplete: 0,
      waitingForApproval: 0,
      beingProcessed: 0
    },
    revisions: {
      needingRevision: 0,
      sentBackToAuthor: 0,
      incomplete: 0,
      waitingForApproval: 0,
      beingProcessed: 0,
      declined: 0
    },
    completed: {
      withDecision: 0
    }
  };

  @Output() submitNewManuscript = new EventEmitter<void>();
  @Output() viewSentBackToAuthor = new EventEmitter<void>();
  @Output() viewIncomplete = new EventEmitter<void>();
  @Output() viewWaitingForApproval = new EventEmitter<void>();
  @Output() viewBeingProcessed = new EventEmitter<void>();
  @Output() viewNeedingRevision = new EventEmitter<void>();
  @Output() viewRevisionsSentBack = new EventEmitter<void>();
  @Output() viewIncompleteRevisions = new EventEmitter<void>();
  @Output() viewRevisionsWaiting = new EventEmitter<void>();
  @Output() viewRevisionsProcessing = new EventEmitter<void>();
  @Output() viewDeclinedRevisions = new EventEmitter<void>();
  @Output() viewCompleted = new EventEmitter<void>();
} 