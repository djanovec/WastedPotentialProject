import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

// getQuiz(){
//   this.http.get();\

constructor(private http: HttpClient) {}

  getStudentsByQuizId(id){
    return this.http.get("/api/:id")
  }

  postQuiz() {
  return this.http.get("quizzes/postQuiz")
}

getQuizByToken(token){
  return this.http.post("quizzes/getQuizById", token);
}
  getQuizResultsByQuizId(){
    return this.http.post("quizzes/getQuizResultsByQuizId", Observable);
  }
  postUserAnswersByQuizId(){
    return this.http.post("quizzes/postAnswersByQuizId", Observable);
  }
getUserQuizScores(){
  return this.http.post("quizzes/getScore", Observable);
}
getAllUserQuizScores(){
  return this.http.post("quizzes/getAllUserScoresByQuizId", Observable);
}

}
