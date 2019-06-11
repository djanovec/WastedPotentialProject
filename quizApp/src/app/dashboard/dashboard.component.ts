import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  quiz = {
    title: "test"
  }
  constructor(private quizService: QuizServiceService) { }

  ngOnInit() {
  }

}
