import {Component, ViewChild} from '@angular/core';
import {PagesService} from "../service/pages.service";
import {PageContextService} from "../../service/page-context.service";
import {PageContext} from "../../model/page-context.model";
import {DropdownComponent} from "./dropdown/dropdown.component";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  @ViewChild(DropdownComponent, {static: false}) dropdownComponent: DropdownComponent;

  constructor(private pagesService: PagesService, private titleService: PageContextService) {
    titleService.updatePageContext(new PageContext("Example for micrometer counter with tags / labels", "counter_tag"));
  }

  onSubmit() {
    this.pagesService.updateTags(this.dropdownComponent.selectedEntityValue, this.dropdownComponent.selectedOperationValue);
  }
}
