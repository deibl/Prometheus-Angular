package com.promangular.metrics;

import com.promangular.model.MetricMeasurement;
import com.promangular.model.TagedMeasurement;
import io.micrometer.core.annotation.Timed;
import io.micrometer.core.instrument.*;
import io.micrometer.prometheus.PrometheusMeterRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static com.promangular.metrics.MetricKey.*;

@Service
@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
public class MetricsService {

    public static final String TAG_OPERATION = "operation";
    public static final String TAG_ENTITY = "entity";

    private static final Random RANDOM = new Random();

    @Autowired
    private PrometheusMeterRegistry registry;

    private Counter counter;
    private List<Integer> listMonitoredByGauge = new ArrayList<>();
    private Timer timer;
    private LongTaskTimer longTaskTimer;
    private LongTaskTimer.Sample sample;
    private DistributionSummary distributionSummary;
    private DistributionSummary distributionSummaryQuantiles;
    private DistributionSummary distributionSummaryBuckets;
    private Timer timerHistogram;
    private List<Integer> increasingListMonitoredByFunctionCounter = new ArrayList<>();

    @PostConstruct
    public void initMetrics() {
        counter = Counter
                .builder(COUNTER_SIMPLE.getFullName())
                .description(COUNTER_SIMPLE.getDescription())
                .register(registry);
        Gauge.builder(GAUGE.getFullName(), listMonitoredByGauge, List::size)
                .description(GAUGE.getDescription())
                .register(registry);
        timer = Timer
                .builder(TIMER_SIMPLE.getFullName())
                .description(TIMER_SIMPLE.getDescription())
                .register(registry);
        longTaskTimer = LongTaskTimer
                .builder(LONG_TASK_TIMER.getFullName())
                .description(LONG_TASK_TIMER.getDescription())
                .register(registry);
        distributionSummary = DistributionSummary
                .builder(DISTRIBUTION_SUMMARY_SIMPLE.getFullName())
                .description(DISTRIBUTION_SUMMARY_SIMPLE.getDescription())
                .register(registry);
        distributionSummaryQuantiles = DistributionSummary
                .builder(DISTRIBUTION_SUMMARY_QUANTILE.getFullName())
                .publishPercentiles(0.3, 0.5, 0.9)
                .description(DISTRIBUTION_SUMMARY_QUANTILE.getDescription())
                .register(registry);
        distributionSummaryBuckets = DistributionSummary
                .builder(DISTRIBUTION_SUMMARY_BUCKET.getFullName())
                .sla(1, 10, 20, 50, 100, 1000)
                .description(DISTRIBUTION_SUMMARY_BUCKET.getDescription())
                .register(registry);
        timerHistogram = Timer
                .builder(TIMER_HISTOGRAM.getFullName())
                .publishPercentileHistogram()
                .sla(Duration.ofMillis(100), Duration.ofMillis(300))
                .minimumExpectedValue(Duration.ofMillis(10))
                .maximumExpectedValue(Duration.ofSeconds(1))
                .register(registry);
        FunctionCounter
                .builder(COUNTER_FUNCTION.getFullName(), increasingListMonitoredByFunctionCounter, List::size)
                .description(COUNTER_FUNCTION.getDescription())
                .register(registry);
    }

    public void incrementCounter(MetricMeasurement metricMeasurement) {
        counter.increment(metricMeasurement.getValue());
    }

    public void incrementCounter(TagedMeasurement tagedMeasurement) {
        registry.counter(COUNTER_TAG.getFullName(), TAG_ENTITY, tagedMeasurement.getSelectedEntityValue(),
                TAG_OPERATION, tagedMeasurement.getSelectedOperationValue()).increment();
    }

    public void manipulateList(MetricMeasurement amountInsertedViaGui) {
        listMonitoredByGauge.clear();
        listMonitoredByGauge.addAll(IntStream.rangeClosed(1, amountInsertedViaGui.getValue()).boxed().collect(Collectors.toList()));
    }

    public void measureTimeTimeUnit() {
        timer.record(1, TimeUnit.SECONDS);
    }

    public void measureTimeDuration() {
        timer.record(Duration.ofSeconds(1));
    }

    public void measureTimeRunnable() {
        Runnable sleepOneSecond = this::sleepOneSecond;
        timer.record(sleepOneSecond);
    }

    public void measureTimeSupplier() {
        Supplier<String> supplier = () -> {
            sleepOneSecond();
            return "";
        };
        timer.record(supplier);
    }

    @Timed(value = MetricKey.PREFIX + ".annotation")
    public void measureTimeAnnotation() {
        sleepOneSecond();
    }

    private void sleepOneSecond() {
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void startLongTaskTimer() {
        sample = longTaskTimer.start();
    }

    public void stopLongTaskTimer() {
        sample.stop();
    }

    public void recordDistributionSummary(MetricMeasurement metricMeasurement) {
        distributionSummary.record(metricMeasurement.getValue());
    }

    public void recordDistributionSummaryQuantiles(MetricMeasurement metricMeasurement) {
        distributionSummaryQuantiles.record(metricMeasurement.getValue());
    }

    public void recordDistributionSummaryBuckets(MetricMeasurement metricMeasurement) {
        distributionSummaryBuckets.record(metricMeasurement.getValue());
    }

    public void recordRandomTimerHistogram() {
        for (int i = 0; i < 100; i++) {
            timerHistogram.record(Duration.ofMillis(getRandomMillisBetween(1, 1000)));
        }
    }

    private long getRandomMillisBetween(int lowerBound, int upperBound) {
        return RANDOM.nextInt(upperBound - lowerBound) + lowerBound;
    }

    public void addToFunctionList() {
        increasingListMonitoredByFunctionCounter.add(42);
    }
}
