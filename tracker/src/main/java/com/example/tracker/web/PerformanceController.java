package com.example.tracker.web;

import com.example.tracker.dto.PerformanceDto;
import com.example.tracker.service.PerformanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/performance")
@RequiredArgsConstructor
public class PerformanceController {

    private final PerformanceService performanceService;

    @GetMapping
    public List<PerformanceDto> getPerformance() {
        return performanceService.getPerformance();
    }
}
