import { nanoid } from 'nanoid';
import { describe, it, vi, expect } from 'vitest';
import { createServer } from '../../../utils/createServer';
import * as TodoService from '../todo.service';

describe('POST "/api/todos" route', () => {
  it('should call the createTodo service', async () => {
    const todo = {
      _id: 'mock id',
      title: 'mock title',
      shortId: nanoid(),
      complete: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const createTodoSpy = vi.spyOn(TodoService, 'createTodo');

    expect(createTodoSpy.getMockName()).toEqual('createTodo');

    createTodoSpy.mockResolvedValue(todo);

    const server = await createServer();

    await server.ready();

    const payload = {
      title: 'A test todo',
    };

    const response = await server.inject({
      method: 'POST',
      url: '/api/todos',
      payload,
    });

    expect(response.json()).toEqual(todo);

    expect(createTodoSpy).toHaveBeenCalledWith(payload);
  });
});
