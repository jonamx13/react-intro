import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text:'Assassin’s Creed II', completed: false},
  {text:'Assassin’s Creed Brotherhood', completed: false},
  {text:'Assassin’s Creed III Liberation', completed: false},
  {text:'Assassin’s Creed IV Black Flag', completed: false},
  {text:'Assassin’s Creed Freedom Cry', completed: false},
  {text:'Assassin’s Creed Rogue Remastered', completed: true},
  {text:'Assassin’s Creed Unity', completed: true},
  {text:'Assassin’s Creed Syndicate', completed: false},
  {text:'Assassin’s Creed Chronicles: China', completed: false},
  {text:'Assassin’s Creed Chronicles: India', completed: false},
  {text:'Assassin’s Creed Chronicles: Russia', completed: false},
  {text:'Assassin’s Creed Origins', completed: true},
  {text:'Assassin’s Creed Odyssey', completed: false},
  {text:'Assassin’s Creed Mirage', completed: false},
  {text:'Assassin’s Creed Shadows', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList >
        {defaultTodos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList >

      <CreateTodoButton />
    </>
  );
}

export default App;
