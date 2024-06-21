import './TodoSearch.css'

function TodoSearch() {
    return (
      <input
      placeholder="Assassin's Creed..."
      className='TodoSearch'
      onChange={(event) => {
        console.log('You have written in TodoSearch');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
      />
    );
  }

  export { TodoSearch };