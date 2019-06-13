import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

// getQuiz(){
//   this.http.get();\

constructor(private http: HttpClient) {}

  quiz: any;

  getQuizByToken(token){
    this.quiz=this.http.get(`localhost:3000/quizzes/getQuizById/${token}`);
    this.quiz.subscribe(res=>this.quiz=res);
    return this.quiz;
  }

  getStudentsByQuizId(id){
    return this.http.get("/api/:id")
  }
}
