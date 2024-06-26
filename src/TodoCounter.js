import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
      <h1 className='TodoCounter'>
        You have completed <span>{completed}</span> of <span>{total}</span> Platinum Trophies
      </h1>
    );
  }

  export { TodoCounter };