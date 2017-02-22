import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QuestionBlocksView } from '../pages/questionBlocksView/questionBlocksView';
import { QuestionBlockView } from '../pages/questionBlockView/questionBlockView';
import { QuestionView } from '../pages/questionView/questionView';
import { Datasource } from '../providers/datasource';

@NgModule({
  declarations: [
    MyApp,
    QuestionBlocksView,
    QuestionBlockView,
    QuestionView
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuestionBlocksView,
    QuestionBlockView,
    QuestionView
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler },Datasource]
})
export class AppModule {}
