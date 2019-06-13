import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from '../services/quiz-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-guard',
  templateUrl: './quiz-guard.component.html',
  styleUrls: ['./quiz-guard.component.scss']
})
export class QuizGuardComponent implements OnInit {
token: string;
submit() {
  this.quizService.getQuizByToken(this.token);
}
  constructor(private quizService: QuizServiceService, private router: Router) { }

  ngOnInit() {
  }

}
