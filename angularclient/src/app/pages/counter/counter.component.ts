import { Component, OnInit } from '@angular/core';
import {PageContextService} from "../../service/page-context.service";
import {PagesService} from "../service/pages.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  amount: number;

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    this.amount = 0;
    titleService.updatePageContext(new PageContext("Example for micrometer counter", "counter_simple"));
  }

  onSingleSubmit() {
    this.pagesService.updateCounter(1);
  }

  onMultiSubmit() {
    this.pagesService.updateCounter(this.amount);
  }
}
