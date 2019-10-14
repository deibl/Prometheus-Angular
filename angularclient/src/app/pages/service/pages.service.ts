import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PagesService {

  constructor(private http: HttpClient) {}

  updateBucket(amount: number) {
    let url = 'http://localhost:8080/bucket';
    this.http.put(url, {value: amount})
      .subscribe(response => console.info(response));
  }

  updateCounter(amount: number) {
    let url = 'http://localhost:8080/counter';
    this.http.put(url, {value: amount})
      .subscribe(response => console.info(response));
  }

  updateDistributionSummary(amount: number) {
    let url = 'http://localhost:8080/distributionsummary';
    this.http.put(url, {value: amount})
      .subscribe(response => console.info(response));
  }

  increaseFunction() {
    let url = 'http://localhost:8080/function';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  updateGauge(amount: number) {
    let url = 'http://localhost:8080/gauge';
    this.http.put(url, {value: amount})
      .subscribe(response => console.info(response));
  }

  randomMeasurement() {
    let url = 'http://localhost:8080/histogram';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  startTimer() {
    let url = 'http://localhost:8080/timer/start';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  stopTimer() {
    let url = 'http://localhost:8080/timer/stop';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  updateQuantile(amount: number) {
    let url = 'http://localhost:8080/quantile';
    this.http.put(url, {value: amount})
      .subscribe(response => console.info(response));
  }

  updateTags(selectedEntityValue: string, selectedOperationValue: string) {
    let url = 'http://localhost:8080/tags';
    this.http.put(url, {selectedEntityValue: selectedEntityValue, selectedOperationValue: selectedOperationValue})
      .subscribe(response => console.info(response));
  }

  measureTimeAnnotation() {
    let url = 'http://localhost:8080/annotation';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  measureTimeTimeUnit() {
    let url = 'http://localhost:8080/timer/timeunit';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  measureTimeDuration() {
    let url = 'http://localhost:8080/timer/duration';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  measureTimeRunnable() {
    let url = 'http://localhost:8080/timer/runnable';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }

  measureTimeSupplier() {
    let url = 'http://localhost:8080/timer/supplier';
    this.http.get(url)
      .subscribe(response => console.info(response));
  }
}
