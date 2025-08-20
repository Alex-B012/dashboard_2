import './profileStats.css'

interface ProfileStatsProp {
   projects: number,
   tasks: number,
   success: number,
}

function ProfileStats({ projects, tasks, success }: ProfileStatsProp) {
   return (
      <div className="profileStats__list">
         <div className="profileStats__item">
            <span className="profileStats__value">{projects}</span>
            <span className="profileStats__label">Projects</span>
         </div>
         <div className="profileStats__item">
            <span className="profileStats__value">{tasks}</span>
            <span className="profileStats__label">tasks</span>
         </div>
         <div className="profileStats__item">
            <span className="profileStats__value">{success}%</span>
            <span className="profileStats__label">Success</span>
         </div>
      </div>
   )
}

export default ProfileStats