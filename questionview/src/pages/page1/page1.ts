import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Datasource } from '../../providers/datasource';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

public questionBlocks = [];

  constructor(public navCtrl: NavController, datasource: Datasource) {
    this.questionBlocks = datasource.questionBlocks;
  }

}
