import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { currentProjects } from '../../../data/projects'
import './projects.css'
import ProjectsGrid from './ProjectsGrid/ProjectsGrid'

function Projects() {
   return (
      <section className="projects__section">
         <SectionTitle title={"Ongoing Projects"} btn={{ text: "View All" }} />
         <ProjectsGrid projects={currentProjects} />
      </section>
   )
}

export default Projects