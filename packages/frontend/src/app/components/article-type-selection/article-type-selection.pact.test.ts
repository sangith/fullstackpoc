import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ArticleTypeSelectionComponent } from './article-type-selection.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ArticleType } from '../../../models/journal';

describe('ArticleTypeSelectionComponent (API)', () => {
  let component: ArticleTypeSelectionComponent;
  let fixture: ComponentFixture<ArticleTypeSelectionComponent>;
  let httpMock: HttpTestingController;

  const mockArticleTypes: ArticleType[] = [
    {
      id: '1',
      name: 'Research Article',
      description: 'Original research articles presenting significant findings in cancer research.',
      wordLimit: 5000,
      abstractRequired: true,
      keywordsRequired: true,
      guidelines: 'https://www.cell.com/trends/cancer/authors'
    },
    {
      id: '2',
      name: 'Editorial',
      description: 'Short expert commentary.',
      wordLimit: 2000,
      abstractRequired: false,
      keywordsRequired: true,
      guidelines: 'https://www.cell.com/trends/cancer/authors'
    }
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArticleTypeSelectionComponent, FormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTypeSelectionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch and display article types from the API', () => {
    const req = httpMock.expectOne('/journal-meta-data/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockArticleTypes);
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    expect(select.options.length).toBe(mockArticleTypes.length + 1); // +1 for None
    mockArticleTypes.forEach(type => {
      const found = Array.from(select.options).some(opt => opt.textContent?.trim() === type.name);
      expect(found).toBe(true);
    });
  });

  it('should update selectedArticleType when an option is selected', () => {
    const req = httpMock.expectOne('/journal-meta-data/1');
    req.flush(mockArticleTypes);
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    select.selectedIndex = 1;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectedArticleType).toEqual(mockArticleTypes[0]);
  });
}); 