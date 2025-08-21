import { useEffect } from 'react';
import './progressRing.css'

interface ProgressRingProp {
   progress: number
}

function ProgressRing({ progress }: ProgressRingProp) {
   //  Animate progress rings


   useEffect(() => {
      document.querySelectorAll(".progressRing__fill").forEach((ring) => {
         const htmlRing = ring as HTMLElement;
         const circumference = 283; //2*п*r

         const progressRing = ring.closest(".progressRing__section");
         if (!progressRing) return;

         const progressTextElement = progressRing.querySelector(".progressRing__text");
         if (!progressTextElement) return;

         const progressText = progressTextElement.textContent;
         if (!progressText) return;

         const percentage = parseInt(progressText);
         const offset = circumference - (percentage * circumference) / 100;
         htmlRing.style.strokeDashoffset = offset.toString();
      });
   }, []);


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