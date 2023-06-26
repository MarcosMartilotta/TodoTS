import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

/* Con esto de <Props> estoy indicando que las props que le paso tienen esta forma. En este caso
seria forma de ListOfTodos que tipe arriba como todo: ListOfTodos. A la que a su vez tipe como un array de Todo
es un generico. En la version 17 no se recomendaba React.FC pero ahora si anda como debería */
const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleteTodo={onToggleCompleteTodo}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos
