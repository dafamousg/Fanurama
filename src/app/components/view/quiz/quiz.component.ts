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
  questionLength:number = 0;
  answeredCorrect:number = 0;
  currentQuestion:number = 1;

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.subscription = this.futuramaServices.getQuiz().subscribe(Qq => {
      
      if(Qq["question"] == undefined){
        Qq.splice(Qq.length -2,2);
      }
      
      Qq.map(question => {
        question.possibleAnswers = this.shuffle(question.possibleAnswers);
      });
      this.quizQuestions = this.shuffle(Qq);
      this.questionLength = Qq.length;
    })
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }

  pointCheck(count){
    this.currentQuestion++;
    this.answeredCorrect += count;
  }

  QuestionToItem(arr:Quiz[]){
    return arr[this.currentQuestion - 1];
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
