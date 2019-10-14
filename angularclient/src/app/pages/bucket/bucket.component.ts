import {Component, EventEmitter, Output} from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {

  amount: number;

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    this.amount = 0;
    titleService.updatePageContext(new PageContext("Example for micrometer Distribution Summary with buckets", "distribution_summary_bucket"));
  }

  onSubmit() {
    this.pagesService.updateBucket(this.amount);
  }
}
