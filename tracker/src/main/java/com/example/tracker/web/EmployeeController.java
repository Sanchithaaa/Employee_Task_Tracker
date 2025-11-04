package com.example.tracker.web;

import com.example.tracker.dto.EmployeeDto;
import com.example.tracker.model.Employee;
import com.example.tracker.service.EmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee create(@Valid @RequestBody EmployeeDto dto) {
        return employeeService.create(dto);
    }

    @GetMapping
    public List<Employee> list() {
        return employeeService.list();
    }

    @GetMapping("/{id}")
    public Employee get(@PathVariable Long id) {
        return employeeService.get(id);
    }
}
