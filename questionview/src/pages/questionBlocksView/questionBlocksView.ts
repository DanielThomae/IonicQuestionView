import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Datasource } from '../../providers/datasource';
import { QuestionBlockView } from '../questionBlockView/questionBlockView';


@Component({
  selector: 'page-questionBlocksView',
  templateUrl: 'questionBlocksView.html'
})
export class QuestionBlocksView {

public questionBlocks = [];

  constructor(public navCtrl: NavController, datasource: Datasource) {
    this.questionBlocks = datasource.questionBlocks;
  }

  itemClicked(id){
    this.navCtrl.push(QuestionBlockView,id);
  }

}
