import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent {

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Example for micrometer Timer with histogram", "timer_histogram"));
  }

  randomMeasurement() {
    this.pagesService.randomMeasurement();
  }
}
