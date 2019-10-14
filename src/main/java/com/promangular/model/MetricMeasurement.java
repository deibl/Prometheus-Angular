package com.promangular.model;

public class MetricMeasurement {
    private int value;

    public MetricMeasurement(int value) {
        this.value = value;
    }

    public MetricMeasurement() {
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
