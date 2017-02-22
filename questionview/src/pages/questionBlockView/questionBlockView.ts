import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { QuestionView } from '../questionView/questionView';
import { Datasource } from '../../providers/datasource';


@Component({
  selector: 'page-questionBlockView',
  templateUrl: 'questionBlockView.html'
})
export class QuestionBlockView {
  questionBlock = new Object();

  constructor(public navCtrl: NavController, public navParams: NavParams, public datasource:Datasource) {
    this.questionBlock = datasource.questionBlocks.find(questionBlock => questionBlock.id === this.navParams.data);
  }

  itemClicked(questionBlockId,questionId ) {
    let path = new Object();
    path["questionBlockId"] = questionBlockId; 
    path["questionId"] = questionId;
    this.navCtrl.push(QuestionView,path);
  }
}
