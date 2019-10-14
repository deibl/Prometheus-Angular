import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent {

  amount: number;

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    this.amount = 0;
    titleService.updatePageContext(new PageContext("Example for micrometer gauge", "gauge"));
  }

  onSubmit() {
    this.pagesService.updateGauge(this.amount);
  }
}
