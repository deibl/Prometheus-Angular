import { Component } from '@angular/core';
import {PagesService} from "../../service/pages.service";
import {PageContextService} from "../../../service/page-context.service";
import {PageContext} from "../../../model/page-context.model";

export interface DropdownEntry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent  {

  private _selectedEntity: string;
  private _selectedOperation: string;

  entities: DropdownEntry[] = [
    {value: 'address', viewValue: 'Address'},
    {value: 'order', viewValue: 'Order'},
    {value: 'person', viewValue: 'Person'}
  ];

  operations: DropdownEntry[] = [
    {value: 'GET', viewValue: 'GET'},
    {value: 'POST', viewValue: 'POST'},
    {value: 'PUT', viewValue: 'PUT'},
    {value: 'DELETE', viewValue: 'DELETE'}
  ];

  get selectedEntityValue(): string {
    return this._selectedEntity;
  }

  get selectedOperationValue(): string {
    return this._selectedOperation;
  }
}
