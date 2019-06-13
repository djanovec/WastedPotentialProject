import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

// getQuiz(){
//   this.http.get();\

constructor(private http: HttpClient, private router: Router) {}

  private savedQuiz = new BehaviorSubject('');
  quiz = this.savedQuiz.asObservable();
  errorMsg: string;

  getQuizByToken(token){
    this.http.get(`quizzes/getQuizById/${token}`)
    .subscribe(res=>{
      if (res['error']) {
      return this.errorMsg="No quiz found";
      }
      else {
      this.router.navigate(['/take_quiz'])
      return;
    }});
  }

  getStudentsByQuizId(id){
    return this.http.get("/api/:id")
  }

  // defineQuiz(){
  //   return this.quiz;
  // }

}
