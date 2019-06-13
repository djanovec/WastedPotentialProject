import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['name', 'score', 'date', ];

  constructor(private quizService: QuizServiceService) { }

  ngOnInit() {
  }

}
