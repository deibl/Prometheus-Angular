import {Component, OnInit} from '@angular/core';
import {PrometheusService} from "../service/prometheus.service";
import {interval, Subscription} from "rxjs";
import {PageContextService} from "../service/page-context.service";

@Component({
  selector: 'prometheus-root',
  templateUrl: './prometheus.component.html',
  styleUrls: ['./prometheus.component.css']
})
export class PrometheusComponent implements OnInit {

  private updateSubscription: Subscription;
  private currentFilter: string;
  metrics: String;
  lastUpdate: String;

  constructor(private prometheusService: PrometheusService, private pageContextService: PageContextService) {
    this.currentFilter = "";
    pageContextService.getPageContext().subscribe(c => this.currentFilter = c.metricFilter)
  }

  ngOnInit() {
    this.refreshData();
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.refreshData() }
    );
  }

  private refreshData() {
    this.prometheusService.findAll().subscribe(data => {
      this.metrics = data.split("\n")
        .filter(l => l.startsWith("prometheus_example_" + this.currentFilter))
        .map(m => m.replace("prometheus_example_", ""))
        .join("\n");
    });
    let date = new Date();
    this.lastUpdate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  }
}
