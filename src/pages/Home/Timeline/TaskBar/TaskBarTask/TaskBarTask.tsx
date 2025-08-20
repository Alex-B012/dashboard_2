import { TaskBarTaskInterface } from '../../../../../types/interfaces';
import './taskBarTask.css'

interface TaskBarTaskProp {
   task: TaskBarTaskInterface,
}

function TaskBarTask({ task }: TaskBarTaskProp) {
   return (
      <div
         className={`taskBar__task taskBar__task-${task.style_data.bg_color} ${task.teamMember === 1 ? `` : `taskBar__task-line${task.teamMember}`} ${task.day === 'Mon' ? `` : `taskBar__task-${task.day.toLowerCase()}`}`}
         style={{
            width: task.style_data.width,
         }}
      >
         {task.taskName}
      </div>
   )
}

export default TaskBarTask