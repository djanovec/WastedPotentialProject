import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  creatorId: Number;
  quizzes: any;
  results: Object[] = [];
  scores: Object[];
  names: Object[];
  dates: Object[];
  displayedColumns = ['name', 'score', 'date', ];
  constructor(private quizService: QuizServiceService, private userServ: UserServiceService) { }
  getId(){
    this.creatorId = this.userServ.loggedInId.value;
  }
  getQuizzes(creatorId){
    this.quizService.getQuizByAdmin(creatorId).subscribe(res =>{
      res['quizzes'] = this.quizzes;
    })
  }
  getScores(quizId){
    this.quizService.getStudentsByQuizId(quizId).subscribe((res: Object[]) => {
      this.results = res;
      this.results.forEach(result => {
        this.scores.push(result['score']);
        this.names.push(result['email']);
        this.dates.push(result['datestamp']);
      });
    })
  }
  ngOnInit() {
    this.getId();
    this.getQuizzes(this.creatorId);
  }

}
