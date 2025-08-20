import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projectCardHeader.css'
import { icons } from '../../../../../../data/data';

interface ProjectCardHeaderProp {
   project: {
      name: string,
      category: string,
      weeks: number,
      priority: number,
   }
}

function ProjectCardHeader({ project }: ProjectCardHeaderProp) {
   let projectCategory = project.category.toLowerCase();
   let priority = "low";
   if (project.priority === 1) priority = "high";
   if (project.priority === 2) priority = "medium";

   return (
      <div className="projectCard__header">
         <div className="projectCard__title">
            <h3>
               <span className={`projectCard__indicator projectCard__priority-${priority}`}> </span>
               {project.name}
            </h3>
            <span className={`projectCard__category projectCard__category-${projectCategory}`}> {project.category}</span>
         </div>
         <div className="projectCard__time">
            <FontAwesomeIcon icon={icons.clock} className="projectCard__icon" />
            {project.weeks} {project.weeks > 1 ? "Weeks" : "Week"}
         </div>
      </div >
   )
}

export default ProjectCardHeader