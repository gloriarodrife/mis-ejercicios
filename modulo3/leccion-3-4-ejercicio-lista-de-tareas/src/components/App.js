import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [searchTask, setSearchTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '123', task: 'Comprar harina, jamón y pan rallado', completed: true },
    { id: '456', task: 'Hacer croquetas ricas', completed: true },
    { id: '789', task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      id: '321',
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const renderTasksCmpleted = () => {
    return (
      <div>
        <p>Tareas totales: {tasks.length}</p>
        <p>
          Tareas completadas: {tasks.filter((task) => task.completed).length}
        </p>
        <p>
          Tareas pendientes: {tasks.filter((task) => !task.completed).length}
        </p>
      </div>
    );
  };

  const hadleComplete = (ev) => {
    const taskId = ev.currentTarget.id;
    console.log(taskId);

    const task = tasks.find((task) => task.id === taskId);

    task.completed = !task.completed;
    console.log(task);

    setTasks([...tasks]);
  };

  const handleInput = (ev) => {
    setSearchTask(ev.target.value);
  };

  const renderTasks = () => {
    let taskDone = '';

    return tasks
      .filter((task) =>
        task.task.toLowerCase().includes(searchTask.toLowerCase())
      )
      .map((task) => {
        let taskDone = '';
        if (task.completed) {
          taskDone = 'crossOut';
        }
        return (
          <li
            id={task.id}
            key={task.id}
            className={taskDone}
            onClick={hadleComplete}
          >
            {task.task}
          </li>
        );
      });
  };
  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <input type="text" onChange={handleInput} value={searchTask} />
      <ul>{renderTasks()}</ul>
      {renderTasksCmpleted()}
    </div>
  );
}

export default App;
