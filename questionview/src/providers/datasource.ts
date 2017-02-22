import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Datasource provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Datasource {

public questionBlocks = new Array<QuestionBlock>();


  constructor(public http: Http) {

    let testQuestionBlock = new QuestionBlock();
    testQuestionBlock.name = "Testfrageblock";
    testQuestionBlock.id = 0;
    let testQuestion = new Question();
    testQuestion.text = "Testfrage";
    testQuestion.id = 0;
    testQuestion
    let testAnswer1 = new Answer();
    testAnswer1.id = 0;
    testAnswer1.text = "richtig";
    testAnswer1.isCorrect = true;
    let testAnswer2 = new Answer();
    testAnswer2.id = 1;
    testAnswer2.text = "falsch";
    testAnswer2.isCorrect = false;

    let testQuestionBlock2 = new QuestionBlock();
    testQuestionBlock2.name = "Wirtschaftsinformatiker";
    testQuestionBlock2.id = 1;
    let testQuestion2 = new Question();
    testQuestion2.text = "Sind sie richtige Informatiker?";
    testQuestion2.id = 1;
    let testAnswer3 = new Answer();
    testAnswer3.id = 0;
    testAnswer3.text = "Der Witz war gut";
    testAnswer3.isCorrect = true;
    let testAnswer4 = new Answer();
    testAnswer4.id = 1;
    testAnswer4.text = "Sie geben ihr Bestes";
    testAnswer4.isCorrect = false;
    let testAnswer5 = new Answer();
    testAnswer5.id = 1;
    testAnswer5.text = "Sie können nichts dafür";
    testAnswer5.isCorrect = false;

    testQuestion.answers.push(testAnswer1);
    testQuestion.answers.push(testAnswer2);
    testQuestion2.answers.push(testAnswer3);
    testQuestion2.answers.push(testAnswer4);
    testQuestion2.answers.push(testAnswer5);
    testQuestionBlock.questions.push(testQuestion);
    testQuestionBlock.questions.push(testQuestion);
    testQuestionBlock2.questions.push(testQuestion2);
    this.questionBlocks.push(testQuestionBlock);
    this.questionBlocks.push(testQuestionBlock2);
  }

  getQuestionBlocks(){
    return this.questionBlocks;
  }

  getQuestionBlock(id){
   return this.questionBlocks.find(questionBlock => questionBlock.id === id);
  }
  addQuestionBlock(newQuestionBlock){
    this.questionBlocks.push(newQuestionBlock);
    return this.questionBlocks;
  }
  updateQuestionBlock(id){
    
  }

}

class QuestionBlock{
  id:number;
  name:string;
  questions = new Array<Question>();
}

class Question{
  id:number;
  text: string;
  typ: string;
  category: string;
  answers = new Array<Answer>();
}

class Answer{
  id:number;
  text:string;
  isCorrect:boolean;
}
