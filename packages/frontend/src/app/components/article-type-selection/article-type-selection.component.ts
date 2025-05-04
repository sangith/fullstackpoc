import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface ArticleType {
  id: string;
  name: string;
  description: string;
  wordLimit: number;
  abstractRequired: boolean;
  keywordsRequired: boolean;
  guidelines: string;
}

@Component({
  selector: 'app-article-type-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-type-selection.component.html',
  styleUrls: ['./article-type-selection.component.scss']
})
export class ArticleTypeSelectionComponent implements OnInit {
  articleTypes: ArticleType[] = [];
  selectedArticleType: ArticleType | null = null;
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchArticleTypes();
  }

  fetchArticleTypes() {
    this.loading = true;
    this.error = null;
    this.http.get<ArticleType[]>('/journal-meta-data').subscribe({
      next: (data) => {
        this.articleTypes = data;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message || 'Failed to load article types.';
        this.loading = false;
      }
    });
  }
} 