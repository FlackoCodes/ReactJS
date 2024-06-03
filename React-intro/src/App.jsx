import { useState } from "react";
import './index.css'
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
 
  const  [ tasks, setTasks ] = useState( [
    {
        id: 1,
        text: 'Continue writing React',
        day: 'Monday, All Day',
        reminder: true
    },
    {
        id: 2, // Updated id to be unique
        text: 'Revise Asynchronous and Promises',
        day: 'Tuesday Before Work',
        reminder: true
    },
    {
        id: 3,
        text: 'Skip Work',
        day: 'Wednesday Morning',
        reminder: false
    }
]);


function deleteTask(id) {
  console.log('delete', id);
}

  return (
   <div className='container'>
     <Header />
     <Tasks tasks={tasks}  onDelete ={deleteTask}/>
   </div>
  
  )
}

export default App


