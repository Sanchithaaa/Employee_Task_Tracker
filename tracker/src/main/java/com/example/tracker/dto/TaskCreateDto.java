package com.example.tracker.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class TaskCreateDto {
    private String title;
    private String description;
    private Long employeeId;
}
