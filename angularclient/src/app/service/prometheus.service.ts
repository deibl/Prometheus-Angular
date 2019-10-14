import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class PrometheusService {

  private prometheusUrl: string;

  constructor(private http: HttpClient) {
    this.prometheusUrl = 'http://localhost:8080/actuator/prometheus';
  }

  public findAll(): Observable<string> {
    return this.http.get<string>(this.prometheusUrl, {responseType: 'text' as 'json'});
  }
}
