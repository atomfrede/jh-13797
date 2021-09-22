import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'exam',
        data: { pageTitle: 'jh13797App.exam.home.title' },
        loadChildren: () => import('./exam/exam.module').then(m => m.ExamModule),
      },
      {
        path: 'question',
        data: { pageTitle: 'jh13797App.question.home.title' },
        loadChildren: () => import('./question/question.module').then(m => m.QuestionModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
