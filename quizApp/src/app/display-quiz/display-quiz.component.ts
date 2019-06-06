import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from 'src/app/get-questions.service';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {

  constructor(private questionsService: GetQuestionsService) { }

  ngOnInit() {
  }

  displayQuestions() {
    this.questionsService.getQuestion().subscribe(res => {
      let results = res;
    })
  }
}
