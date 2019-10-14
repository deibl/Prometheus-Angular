import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {


  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Example for micrometer timer", "timer_simple"));
  }

  measureTimeTimeUnit() {
    this.pagesService.measureTimeTimeUnit();
  }

  measureTimeDuration() {
    this.pagesService.measureTimeDuration();
  }

  measureTimeRunnable() {
    this.pagesService.measureTimeRunnable();
  }

  measureTimeSupplier() {
    this.pagesService.measureTimeSupplier();
  }
}
