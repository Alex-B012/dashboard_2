import ViewAllBtn from '../../../components/ViewAllBtn/ViewAllBtn'
import { currentProjects } from '../../../data/projects'
import './projects.css'
import ProjectsGrid from './ProjectsGrid/ProjectsGrid'

function Projects() {
   return (
      <section className="projects__section">
         <div className="projects__title">
            <h2>Ongoing Projects</h2>
            <ViewAllBtn text={"View All"} />
         </div>
         <ProjectsGrid projects={currentProjects} />
      </section>
   )
}

export default Projects