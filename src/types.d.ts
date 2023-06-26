export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
/* tambien se puede hacer Array<Todo> */
export type ListOfTodos = Todo[]

/* Le estoy indicando que use alguna de las keys de todo_filters. Podria ponerlas
  a mano una por una pero si en un futuro se agrega alguna mas hay que agregarla
  a mano aca nuevamente */
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
