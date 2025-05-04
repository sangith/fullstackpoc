import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleTypeSelectionComponent } from './components/article-type-selection/article-type-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/submit', pathMatch: 'full' },
  { path: 'submit', component: ArticleTypeSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 