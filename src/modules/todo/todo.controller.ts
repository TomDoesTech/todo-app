import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../../utils/logger';
import { CreateTodoBody } from './todo.schema';
import { createTodo } from './todo.service';

export async function createTodoHandler(
  request: FastifyRequest<{
    Body: CreateTodoBody;
  }>,
  reply: FastifyReply
) {
  try {
    const todo = await createTodo(request.body);
    return reply.code(201).send(todo);
  } catch (e) {
    logger.error(e, 'createTodoHandler: error creating todo');
    return reply.code(400).send({ message: 'Error creating todo' });
  }
}
