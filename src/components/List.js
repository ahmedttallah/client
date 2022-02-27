import Todo from './Todo'

const List = ({list, removeTodo, editTodo}) => {
  const renderedList = list.map((item) => 
  <Todo 
    title = {item.title} 
    completed = {item.completed} 
    removeTodo = {(e) => removeTodo(item._id)} 
    editTodo = {(updatedItem) => editTodo(item._id, updatedItem)}
    key = {item._id} 
    />);
  return (
    <div className='ui grid center aligned'>
      {renderedList}
    </div> 
  )
}

export default List