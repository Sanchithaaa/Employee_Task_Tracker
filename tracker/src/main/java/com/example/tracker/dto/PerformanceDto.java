package com.example.tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PerformanceDto {
    private Long employeeId;
    private String name;
    private long totalTasks;
    private long completedTasks;
    private double performancePercent;
}
