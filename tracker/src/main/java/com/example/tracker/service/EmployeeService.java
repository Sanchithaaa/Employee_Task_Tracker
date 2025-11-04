package com.example.tracker.service;

import com.example.tracker.dto.EmployeeDto;
import com.example.tracker.model.Employee;
import com.example.tracker.repo.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee create(EmployeeDto dto) {
        Employee e = Employee.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .role(dto.getRole())
                .build();
        return employeeRepository.save(e);
    }

    public List<Employee> list() { return employeeRepository.findAll(); }

    public Employee get(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found: " + id));
    }
}