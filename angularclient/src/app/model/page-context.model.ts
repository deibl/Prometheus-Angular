export class PageContext {
  constructor (private _title: string, private _metricFilter: string){}

  get title(): string {
    return this._title;
  }

  get metricFilter(): string {
    return this._metricFilter;
  }
}
