import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';

import { QuizGuardComponent } from './quiz-guard/quiz-guard.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quiz_form', component: QuizFormComponent },
  { path: 'take_quiz', component: DisplayQuizComponent },
  { path: 'quiz_guard', component: QuizGuardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
