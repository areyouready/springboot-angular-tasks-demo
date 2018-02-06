package de.fnortheim.service;

import de.fnortheim.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
