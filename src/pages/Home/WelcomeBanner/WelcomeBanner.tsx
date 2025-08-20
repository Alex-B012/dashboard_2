import { UserProfileInterface } from '../../../types/interfaces'
import CreateProjectBtn from './CreateProjectBtn/CreateProjectBtn';
import './welcomeBanner.css'

interface WelcomeBannerProp {
   user: UserProfileInterface;
   number: number;
}

function WelcomeBanner({ user, number }: WelcomeBannerProp) {
   return (
      <div className="welcomeBanner__section">
         <h1 className="welcomeBanner__h1">Welcome back, {user.f_name}!</h1>
         {user.projects === 0 && (<p>You do not have ongoing projects.</p>)}
         {user.projects > 0 && (
            <p className="welcomeBanner__p">
               You have {number === 1 ? (`${number} ongoing project`) : (`${number} ongoing projects. `)} {user.deadlines} deadlines are approaching this week.
            </p>
         )}
         <CreateProjectBtn />
      </div>
   )
}

export default WelcomeBanner