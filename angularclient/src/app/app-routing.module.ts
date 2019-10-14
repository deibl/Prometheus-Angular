import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BucketComponent} from "./pages/bucket/bucket.component";
import {CounterComponent} from "./pages/counter/counter.component";
import {DistributionSummaryComponent} from "./pages/distributionsummary/distribution-summary.component";
import {FunctionComponent} from "./pages/function/function.component";
import {GaugeComponent} from "./pages/gauge/gauge.component";
import {HistogramComponent} from "./pages/histogram/histogram.component";
import {HomeComponent} from "./pages/home/home.component";
import {LongTaskTimerComponent} from "./pages/longtasktimer/long-task-timer.component";
import {QuantileComponent} from "./pages/quantile/quantile.component";
import {TagComponent} from "./pages/tag/tag.component";
import {TimerAnnotationComponent} from "./pages/timerannotation/timer-annotation.component";
import {TimerComponent} from "./pages/timer/timer.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bucket', component: BucketComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'distributionsummary', component: DistributionSummaryComponent },
  { path: 'function', component: FunctionComponent },
  { path: 'gauge', component: GaugeComponent },
  { path: 'histogram', component: HistogramComponent },
  { path: 'longtasktimer', component: LongTaskTimerComponent },
  { path: 'quantile', component: QuantileComponent },
  { path: 'tag', component: TagComponent },
  { path: 'annotation', component: TimerAnnotationComponent },
  { path: 'timer', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
