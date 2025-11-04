package com.example.tracker.dto;

import com.example.tracker.model.TaskStatus;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class TaskStatusUpdateDto {
    private TaskStatus status;
}
