import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-quantile',
  templateUrl: './quantile.component.html',
  styleUrls: ['./quantile.component.css']
})
export class QuantileComponent {

  amount: number;

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    this.amount = 0;
    titleService.updatePageContext(new PageContext("Example for micrometer Distribution Summary with quantile", "distribution_summary_quantile"));
  }

  onSubmit() {
    this.pagesService.updateQuantile(this.amount);
  }
}
