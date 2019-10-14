import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-timer',
  templateUrl: './long-task-timer.component.html',
  styleUrls: ['./long-task-timer.component.css']
})
export class LongTaskTimerComponent {

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Example for micrometer long task timer", "long_task_timer"));
  }

  startTimer() {
    this.pagesService.startTimer();
  }

  stopTimer() {
    this.pagesService.stopTimer();
  }
}
