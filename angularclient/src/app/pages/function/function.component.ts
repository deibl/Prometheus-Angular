import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent {

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Example for function counter", "counter_function"));
  }

  onSubmit() {
    this.pagesService.increaseFunction();
  }
}



