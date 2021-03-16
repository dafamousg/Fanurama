import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../../Models/Quiz';
import { FuturamaAPIService } from 'src/app/services/futurama-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  subscription:Subscription;
  quizQuestions:Quiz[];

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.subscription = this.futuramaServices.getQuiz().subscribe(Qq => {
      this.quizQuestions = Qq;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
