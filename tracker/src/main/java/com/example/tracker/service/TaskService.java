package com.example.tracker.service;

import com.example.tracker.dto.TaskCreateDto;
import com.example.tracker.dto.TaskStatusUpdateDto;
import com.example.tracker.model.Employee;
import com.example.tracker.model.Task;
import com.example.tracker.model.TaskStatus;
import com.example.tracker.repo.EmployeeRepository;
import com.example.tracker.repo.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TaskService {

    private final TaskRepository taskRepository;
    private final EmployeeRepository employeeRepository;

    public Task create(TaskCreateDto dto) {
        Employee emp = employeeRepository.findById(dto.getEmployeeId())
                .orElseThrow(() -> new IllegalArgumentException("Employee not found: " + dto.getEmployeeId()));

        Task task = Task.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .employee(emp)
                .status(TaskStatus.PENDING)
                .build();

        return taskRepository.save(task);
    }

    public List<Task> byEmployee(Long employeeId) {
        return taskRepository.findByEmployeeId(employeeId);
    }

    public Task updateStatus(Long id, TaskStatusUpdateDto dto) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task not found: " + id));

        task.setStatus(dto.getStatus());
        if (dto.getStatus() == TaskStatus.COMPLETED) {
            task.setCompletionDate(LocalDate.now());
        }

        return taskRepository.save(task);
    }
}
