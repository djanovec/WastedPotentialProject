import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

// getQuiz(){
//   this.http.get();\

constructor(private http: HttpClient) {}

  getStudentsByQuizId(id){
    return this.http.get(`/quizzes/getScoresAdmin/${id}`)
  }
  getQuizByAdmin(creatorId){
    return this.http.get(`/quizzes/getQuizzesByAdmin/${creatorId}`)
  }
}
