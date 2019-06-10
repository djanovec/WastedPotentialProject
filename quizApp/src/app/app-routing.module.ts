import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

const routes: Routes = [
  {path: 'register', component: RegisterFormComponent}
,
{path: 'quiz_form', component: QuizFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
