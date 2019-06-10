import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http: HttpClient) { }

  quizFormSubmit(quiz: Object){
    return this.http.post('/questions/submit', quiz)
  }
}
