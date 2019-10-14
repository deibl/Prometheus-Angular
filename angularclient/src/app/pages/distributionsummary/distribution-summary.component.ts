import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-distributionsummary',
  templateUrl: './distribution-summary.component.html',
  styleUrls: ['./distribution-summary.component.css']
})
export class DistributionSummaryComponent {

  amount: number;

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    this.amount = 0;
    titleService.updatePageContext(new PageContext("Example for micrometer Distribution Summary", "distribution_summary_simple"));
  }

  onSubmit() {
    this.pagesService.updateDistributionSummary(this.amount);
  }
}
