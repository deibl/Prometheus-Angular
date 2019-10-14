package com.promangular.metrics;

public enum MetricKey {
    COUNTER_SIMPLE("Example for counter metrics"),
    COUNTER_TAG("Example for counter metrics with tags"),
    COUNTER_FUNCTION("Example for counter metrics using functions"),
    GAUGE("Example for gauge metrics"),
    TIMER_SIMPLE("Example for timer metrics"),
    LONG_TASK_TIMER("Example for long task metrics"),
    DISTRIBUTION_SUMMARY_SIMPLE("Example for distribution summary metrics"),
    DISTRIBUTION_SUMMARY_QUANTILE("Example for distribution summary metrics with quantiles"),
    DISTRIBUTION_SUMMARY_BUCKET("Example for distribution summary metrics with buckets"),
    TIMER_HISTOGRAM("Example for timer histogram"),
    ;

    public static final String PREFIX = "prometheus.example";

    private String description;

    MetricKey(String description) {
        this.description = description;
    }

    public String getName() {
        return name().toLowerCase();
    }

    /*
     * Micrometer expects metrics to have dots as separators.
     */
    public String getFullName() {
        return getPrometheusFullName().replace("_", ".");
    }

    /*
     * Prometheus uses underscores as separators.
     */
    public String getPrometheusFullName() {
        return PREFIX + "_" + name().toLowerCase();
    }

    public String getDescription() {
        return description;
    }
}
