import './progressRing.css'

interface ProgressRingProp {
   progress: number
}

function ProgressRing({ progress }: ProgressRingProp) {
   return (
      <div className="progressRing__section">
         <svg
            className="progressRing__circle"
            width="100"
            height="100"
            viewBox="0 0 100 100"
         >
            <circle className="progressRing__bg" cx="50" cy="50" r="45" />
            <circle className="progressRing__fill" cx="50" cy="50" r="45" />
         </svg>
         <div className="progressRing__text">{progress}%</div>
      </div>
   )
}

export default ProgressRing