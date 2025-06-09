package com.example.schedule.service;

import com.example.schedule.model.Task;
import com.example.schedule.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public List<Task> getAll() {
        return repository.findAll();
    }

    public Task getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Task save(Task task) {
        return repository.save(task);
    }

    public Task update(Long id, Task updatedTask) {
        Task task = repository.findById(id).orElse(null);
        if (task != null) {
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setDate(updatedTask.getDate());
            task.setRepeatDaily(updatedTask.isRepeatDaily());
            return repository.save(task);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}