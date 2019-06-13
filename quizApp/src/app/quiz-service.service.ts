import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from './display-quiz/display-quiz.component';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

// getQuiz(){
//   this.http.get();\
sampleQuiz={
  title: 'HTML Quiz',
  description: 'This is a quiz here',
  questions: [
    {
      prompt: 'What does HTML Stand for?',
      choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Make Text Made Language'],
      correct: 'Hyper Text Markup Language'
    },
    {
      prompt: 'Which character is used to indicate an end tag?',
      choices: ['/', '^', '*', '<'],
      correct: '/'
    },
    {
      prompt: 'How can you make a numbered list?',
      choices: ['<ul>', '<list>', '<nl>', '<ol>'],
      correct: '<ol>'
    }
  ]
};

constructor(private http: HttpClient, private router: Router) {}

  private savedQuiz = new BehaviorSubject<Object>(this.sampleQuiz);
  quiz: Quiz;
  errorMsg: string;

  getQuizByToken(token){
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

  getStudentsByQuizId(id){
    return this.http.get("/api/:id")
  }

  postQuiz(quiz) {
    return this.http.post("/quizzes/postQuiz", quiz)
  }

  // defineQuiz(){
  //   return this.quiz;
  // }

}
