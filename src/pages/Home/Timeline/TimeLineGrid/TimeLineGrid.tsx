import './timeLineGrid.css'

interface TimeLineGridProp {
   width: number,
}

function TimeLineGrid({ width }: TimeLineGridProp) {
   return (
      <div className="timeLineGrid__container">
         <div className="timeLineGrid__line" style={{ top: "30px" }}></div>

         {width > 992 && (
            <>
               <div className="timeLineGrid__line" style={{ top: "110px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "190px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "280px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "370px" }}></div>
            </>)}

         {width > 768 && width <= 992 && (
            <>
               <div className="timeLineGrid__line" style={{ top: "105px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "180px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "260px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "335px" }}></div>
            </>)}

         {width <= 768 && (
            <>
               <div className="timeLineGrid__line" style={{ top: "100px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "170px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "240px" }}></div>
               <div className="timeLineGrid__line" style={{ top: "310px" }}></div>
            </>)}
      </div>
   )
}

export default TimeLineGrid