import './projectProgress.css'

interface ProjectProgressProp {
   progress: number,
   category: string
}

function ProjectProgress({ progress, category }: ProjectProgressProp) {
   return (
      <div className="projectProgress__section">
         <div className="projectProgress__info">
            <span>Project Progress</span>
            <span>{progress}%</span>
         </div>
         <div className="projectProgress__bar">
            <div className={`projectProgress__fill projectProgress__${category.toLowerCase()}`} style={{ width: `${progress}%` }}></div>
         </div>
      </div>
   )
}

export default ProjectProgress