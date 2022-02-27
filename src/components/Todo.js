import {useState} from 'react';

const Todo = ({title, completed, removeTodo, editTodo}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDoubleClick = () => {
        setIsEditing(true);
    }

    const handelKeyDown = (e) =>{
        const key = e.keyCode;
        
        // 13 is a key code for Enter key and 27 for Esc
        if (key === 13) {
            editTodo({title : tempValue, completed : completedState});
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    }

    const handleInputChange = (e) => {
        setTempValue(e.target.value);
    }

    const handleCompleteClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodo({title : value, completed : newState});
            return newState;
        });
    }

  return (
    <div className='row'>
        {isEditing ?
                <div className='column seven wide'>
                    <div className='ui input fluid'>
                        <input 
                            onChange={handleInputChange}
                            value = {tempValue}
                            autoFocus = {true}
                            onKeyDown={handelKeyDown} />
                    </div> 
                </div>
        
            :
        <>
            <div className='column five wide' onDoubleClick={handleDoubleClick}>
                <h2 className={"ui header" + (completedState ? " green" : "")}> {value} </h2>
            </div>

            <div className='column one wide'>
                <button 
                    onClick={handleCompleteClick}
                    className={'ui button circular icon' + (completedState ? " blue" : " green")}> 
                    <i className='white check icon'></i> 
                </button>
            </div>

            <div className='column one wide'>
                <button 
                    onClick = {removeTodo}
                    className='ui button circular icon red'> 
                        <i className='white remove icon'></i> 
                </button>
            </div>

        </>
    }
    </div>
  )
}

export default Todo