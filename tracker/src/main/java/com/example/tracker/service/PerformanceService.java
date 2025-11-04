package com.example.tracker.service;

import com.example.tracker.dto.PerformanceDto;
import com.example.tracker.model.TaskStatus;
import com.example.tracker.repo.EmployeeRepository;
import com.example.tracker.repo.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PerformanceService {

    private final EmployeeRepository employeeRepository;
    private final TaskRepository taskRepository;

    public List<PerformanceDto> getPerformance() {
        return employeeRepository.findAll()
                .stream()
                .map(emp -> {
                    long total = taskRepository.countByEmployeeId(emp.getId());
                    long completed = taskRepository.countByEmployeeIdAndStatus(emp.getId(), TaskStatus.COMPLETED);
                    double percent = (total == 0) ? 0 : (completed * 100.0 / total);

                    return new PerformanceDto(
                            emp.getId(),
                            emp.getName(),
                            total,
                            completed,
                            percent
                    );
                }).collect(Collectors.toList());
    }
}
