import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class QuizServiceService {
//  token: {};

  
// getQuiz(){
//   this.http.get();\

constructor(private http: HttpClient, private router: Router) {}

  getStudentsByQuizId(id){
    return this.http.get("/api/:id")
  }

  postQuiz(quiz) {
  return this.http.post("/quizzes/postQuiz", quiz)
}

quiz: Quiz;
  errorMsg: string;
token: string;
  getQuizByToken(token){
    this.token = token;
    this.http.get(`quizzes/getQuizById/${token}`)
    .subscribe(res=>{
      if (res['error']) {
      return this.errorMsg="No quiz found";
      }
      else {
        this.quiz = res as Quiz;
        this.router.navigate(['/take_quiz'])
      return;
    }});
  }

// getAllData(apiItem: String): any {
//   return this.http.get(this.baseURL+apiItem, {responseType: 'json'}); 
//   }
  getQuizResultsByQuizId() {
    return this.http.post("/quizzes/getQuizResultsByQuizId", Observable);
  }
  postUserAnswersByQuizId() {
    return this.http.post("/quizzes/postAnswersByQuizId", Observable);
  }
getUserQuizScores(userAnswers) {
  let request = {
    answers: userAnswers,
    token: this.token,
    userId: "1",
  }
  return this.http.post('/quizzes/getScore', request);
}
getAllUserQuizScores(){
  return this.http.post("quizzes/getAllUserScoresByQuizId", Observable);
}


}
export interface Quiz {
  title?: string;
  description?: string;
  questions?: Array <Questions>;
}
export interface Questions {
    type?: string;
    prompt?: string;
    choices?: Array<string>;
    correct?: string;
  }
