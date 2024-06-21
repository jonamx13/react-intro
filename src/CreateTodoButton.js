import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" 
        onClick={
            (event) => {
                console.log('You have clicked')
                console.log(event)
                console.log(event.target)
            }
        }>+</button>
    );
}

export { CreateTodoButton };