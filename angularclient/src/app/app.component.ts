import {Component, OnDestroy} from '@angular/core';
import {PageContextService} from "./service/page-context.service";
import {Subscription} from "rxjs";
import {PageContext} from "./model/page-context.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title: string;
  subscription: Subscription;

  constructor(private titleService: PageContextService) {
    this.title = "Angular Prometheus Demo Application";
    this.subscription = this.titleService.getPageContext().subscribe(newPageContext => this.title = newPageContext.title)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
