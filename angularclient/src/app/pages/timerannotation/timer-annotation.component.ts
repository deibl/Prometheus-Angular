import { Component, OnInit } from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-timer-annotation',
  templateUrl: './timer-annotation.component.html',
  styleUrls: ['./timer-annotation.component.css']
})
export class TimerAnnotationComponent {

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Example for micrometer timer annotation", "annotation"));
  }

  measureTimeAnnotation() {
    this.pagesService.measureTimeAnnotation();
  }
}
