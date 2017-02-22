import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Datasource } from '../../providers/datasource';



/*
  Generated class for the QuestionView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questionView',
  templateUrl: 'questionView.html'
})
export class QuestionView {
  question = new Object();

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataSource:Datasource ) {
    let bothIds = this.navParams.data;
    let questionBlock = dataSource.questionBlocks.find(questionBlock => questionBlock.id === bothIds["questionBlockId"]);
    this.question = questionBlock.questions.find(question => question.id === bothIds["questionId"]);
  }


}

