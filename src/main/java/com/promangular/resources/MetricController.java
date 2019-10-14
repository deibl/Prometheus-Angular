package com.promangular.resources;

import com.promangular.metrics.MetricsService;
import com.promangular.model.MetricMeasurement;
import com.promangular.model.TagedMeasurement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MetricController {

    @Autowired
    private MetricsService metricsService;

    @PutMapping("/bucket")
    public void increaseBucket(@RequestBody MetricMeasurement metricMeasurement) {
        metricsService.recordDistributionSummaryBuckets(metricMeasurement);
    }

    @PutMapping("/counter")
    public void increaseCounter(@RequestBody MetricMeasurement metricMeasurement) {
        metricsService.incrementCounter(metricMeasurement);
    }

    @PutMapping("/distributionsummary")
    public void increaseDistributionSummary(@RequestBody MetricMeasurement metricMeasurement) {
        metricsService.recordDistributionSummary(metricMeasurement);
    }

    @GetMapping("/function")
    public void increaseFunctionBySetAmount() {
        metricsService.addToFunctionList();
    }

    @PutMapping("/gauge")
    public void setGauge(@RequestBody MetricMeasurement metricMeasurement) {
        metricsService.manipulateList(metricMeasurement);
    }

    @GetMapping("/histogram")
    public void submitHistogram() {
        metricsService.recordRandomTimerHistogram();
    }

    @GetMapping("/timer/start")
    public void startTimer() {
        metricsService.startLongTaskTimer();
    }

    @GetMapping("/timer/stop")
    public void stopTimer() {
        metricsService.stopLongTaskTimer();
    }

    @PutMapping("/quantile")
    public void updateQuantile(@RequestBody MetricMeasurement metricMeasurement) {
        metricsService.recordDistributionSummaryQuantiles(metricMeasurement);
    }

    @PutMapping("/tags")
    public void updateTag(@RequestBody TagedMeasurement tagedMeasurement) {
        metricsService.incrementCounter(tagedMeasurement);
    }

    @GetMapping("/annotation")
    public void measureTimeAnnotation() {
        metricsService.measureTimeAnnotation();
    }

    @GetMapping("/timer/timeunit")
    public void measureTimeTimeUnit() {
        metricsService.measureTimeTimeUnit();
    }

    @GetMapping("/timer/duration")
    public void measureTimeDuration() {
        metricsService.measureTimeDuration();
    }

    @GetMapping("/timer/runnable")
    public void measureTimeRunnable() {
        metricsService.measureTimeRunnable();
    }

    @GetMapping("/timer/supplier")
    public void measureTimeSupplier() {
        metricsService.measureTimeSupplier();
    }
}
