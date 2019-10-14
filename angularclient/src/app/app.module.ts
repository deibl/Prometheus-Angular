import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrometheusComponent} from "./prometheus/prometheus.component";

import { HttpClientModule } from '@angular/common/http';
import {PrometheusService} from "./service/prometheus.service";

import { BucketComponent } from './pages/bucket/bucket.component';
import {FormsModule} from "@angular/forms";
import {PagesService} from "./pages/service/pages.service";
import {PageContextService} from "./service/page-context.service";
import {CounterComponent} from "./pages/counter/counter.component";
import { DistributionSummaryComponent } from './pages/distributionsummary/distribution-summary.component';
import { FunctionComponent } from './pages/function/function.component';
import { GaugeComponent } from './pages/gauge/gauge.component';
import { HistogramComponent } from './pages/histogram/histogram.component';
import { HomeComponent } from './pages/home/home.component';
import { LongTaskTimerComponent } from './pages/longtasktimer/long-task-timer.component';
import { QuantileComponent } from './pages/quantile/quantile.component';
import { TagComponent } from './pages/tag/tag.component';
import { DropdownComponent } from './pages/tag/dropdown/dropdown.component';
import { TimerAnnotationComponent } from './pages/timerannotation/timer-annotation.component';
import { TimerComponent } from './pages/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrometheusComponent,
    BucketComponent,
    CounterComponent,
    DistributionSummaryComponent,
    FunctionComponent,
    GaugeComponent,
    HistogramComponent,
    HomeComponent,
    LongTaskTimerComponent,
    QuantileComponent,
    TagComponent,
    DropdownComponent,
    TimerAnnotationComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PrometheusService,
    PagesService,
    PageContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
