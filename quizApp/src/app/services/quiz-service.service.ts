import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class QuizServiceService {
 token: {};

  
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
  return this.http.get("/quizzes/getQuizById/" + token);
}

// getAllData(apiItem: String): any {
//   return this.http.get(this.baseURL+apiItem, {responseType: 'json'}); 
//   }
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
export interface Quiz {
  title?: string;
  description?: string;
  questions?: [
    {
      prompt: string,
      choices: [string, string, string, string],
      correct: string
    },
    {
      prompt: string,
      choices: [string, string, string, string],
      correct: string
    },
    {
      prompt: string,
      choices: [string, string, string, string],
      correct: string
    }];
}