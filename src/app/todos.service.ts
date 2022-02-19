import { Todo } from './models/todo';

let todos: Todo[] = [];

export function get(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}
export function add(todo: Omit<Todo, 'id'>): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = { ...todo, id: todos.length + 1 };
      todos.push(newTodo);
      res(newTodo);
    }, 2000);
  });
}

export function update(newTodo: Partial<Todo>, id: number): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      todos = todos.map((todo) =>
        todo.id == id ? { ...todo, ...newTodo } : todo
      );
      const updateTodo = todos.find((todo) => todo.id == id);
      if (updateTodo) {
        res(updateTodo);
      } else {
        rej('todo non trovato');
      }
    }, 2000);
  });
}


