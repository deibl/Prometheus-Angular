import { Component, OnInit } from '@angular/core';
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Angular Prometheus Demo Application", ""));
  }
}
