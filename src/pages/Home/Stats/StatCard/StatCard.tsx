import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserStatsProjectsCategory } from '../../../../types/interfaces'
import './statCard.css'

interface StatCardProp {
   data: UserStatsProjectsCategory,
   name: string,
}

function StatCard({ data, name }: StatCardProp) {
   let label = "Total Projects";
   if (name === "inProgress") label = "In Progress";
   if (name === "completed") label = "Completed";

   return (
      <div className="card statCard__section">
         <div className={`statCard__icon statCard__icon-${name}`}>
            <FontAwesomeIcon icon={data.icon} />
         </div>
         <div className="statCard__value">{data.projects}</div>
         <div className="statCard__label">{label}</div>
      </div >
   )
}

export default StatCard