package com.example.tracker.web;

import com.example.tracker.dto.TaskCreateDto;
import com.example.tracker.dto.TaskStatusUpdateDto;
import com.example.tracker.model.Task;
import com.example.tracker.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task create(@Valid @RequestBody TaskCreateDto dto) {
        return taskService.create(dto);
    }

    @GetMapping("/employee/{employeeId}")
    public List<Task> byEmployee(@PathVariable Long employeeId) {
        return taskService.byEmployee(employeeId);
    }

    @PutMapping("/{id}/status")
    public Task updateStatus(@PathVariable Long id, @Valid @RequestBody TaskStatusUpdateDto dto) {
        return taskService.updateStatus(id, dto);
    }
}
