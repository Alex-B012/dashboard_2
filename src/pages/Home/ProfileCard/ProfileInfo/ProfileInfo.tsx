import './profileInfo.css'
import ProgressRing from './ProgressRing/ProgressRing'

interface ProfileInfoProp {
   f_name: string,
   l_name: string,
   position: string,
   progress: number,
}

function ProfileInfo({ f_name, l_name, position, progress }: ProfileInfoProp) {
   return (
      <div className="profileInfo__section">
         <h2 className="profileInfo__fullName">{f_name} {l_name}</h2>
         <p className="profileInfo__position">{position}</p>
         <ProgressRing progress={progress} />
      </div>
   )
}

export default ProfileInfo