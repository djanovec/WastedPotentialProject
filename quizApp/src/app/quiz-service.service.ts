import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

// getQuiz(){
//   this.http.get();

  getStudentsByQuizId(id){
    return this.http.get("/api/:id")
  }

  constructor(private http: HttpClient) { }
}

