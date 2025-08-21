import { taskBar_tasks } from '../../../../data/projects'
import './taskBar.css'
import TaskBarTask from './TaskBarTask/TaskBarTask'

function TaskBar() {
   return (
      <div className='taskBar__container'>
         {taskBar_tasks.map((task) => <TaskBarTask task={task} key={task.id} />)}
      </div >
   )
}

export default TaskBar