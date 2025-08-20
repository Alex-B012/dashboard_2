import { taskBar_tasks } from '../../../../data/projects'
import './taskBar.css'
import TaskBarTask from './TaskBarTask/TaskBarTask'

function TaskBar() {
   return (
      <div className='taskBar__container'>
         {taskBar_tasks.map((task) => <TaskBarTask task={task} />)}
      </div >
   )
}

export default TaskBar