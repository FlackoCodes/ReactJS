import { useState } from "react";


const Tasks = () => {
  const  [ tasks, setTasks ] = useState( [
        {
            id: 1,
            text: 'Continue writing React',
            day: 'Monday',
            reminder: true
        },
        {
            id: 2, // Updated id to be unique
            text: 'Revise Asynchronous and Promises',
            day: 'Tuesday',
            reminder: true
        },
        {
            id: 3,
            text: 'Skip Work',
            day: 'Wednesday',
            reminder: false
        }
    ]);
  return (
    <>
      {tasks.map(task => (
        <h2 key={task.id}>{task.text}</h2>
      ))}
    </>
  );
};

export default Tasks;
