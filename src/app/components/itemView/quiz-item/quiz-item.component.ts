import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quiz } from 'src/app/Models/Quiz';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {
  @Input() quizQuestion:Quiz;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  optionChoice(name:string){
    if(name == this.quizQuestion.correctAnswer){
      this.valueChange.emit(1);
    }
    else{
      this.valueChange.emit(0);
    }
  }

  setClasses() {
    let classes = {
      quizQuestion:true
    }
    return classes;
  }

}
