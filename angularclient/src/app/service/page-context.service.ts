import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {PageContext} from "../model/page-context.model";

@Injectable()
export class PageContextService {

  private pageContext = new Subject<PageContext>();

  getPageContext(): Observable<PageContext> {
    return this.pageContext.asObservable();
  }

  updatePageContext(newPageContext: PageContext) {
    this.pageContext.next(newPageContext);
  }
}
