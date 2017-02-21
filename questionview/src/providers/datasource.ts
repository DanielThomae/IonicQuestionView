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
   testQuestionBlock.description="hier kommt ein Hinweis";
   let testQuestion = new Question();
   testQuestion.text = "Testfrage";

   testQuestionBlock.questions.push(testQuestion);
   testQuestionBlock.questions.push(testQuestion);
   this.questionBlocks.push(testQuestionBlock);
   this.questionBlocks.push(testQuestionBlock);
   this.questionBlocks.push(testQuestionBlock);
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
  description:string;
  questions = new Array<Question>();
}

class Question{
  id:number;
  text: string;
  answers = new Array();
}
