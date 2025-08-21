import './timeLineMarkers.css'

interface TimeLineMarkersProp {
   width: number,
}

function TimeLineMarkers({ width }: TimeLineMarkersProp) {
   return (
      <div className='timelineMarkers__list'>
         <div className="timelineMarkers__marker" style={{ left: "0" }}>Mon</div>

         {width > 992 && (<>
            <div className="timelineMarkers__marker" style={{ left: "200px" }}>Tue</div>
            <div className="timelineMarkers__marker" style={{ left: "400px" }}>Wed</div>
            <div className="timelineMarkers__marker" style={{ left: "600px" }}>Thu</div>
            <div className="timelineMarkers__marker" style={{ left: "800px" }}>Fri</div>
         </>)}

         {width > 768 && width <= 992 && (
            <>
               <div className="timelineMarkers__marker" style={{ left: "190px" }}>Tue</div>
               <div className="timelineMarkers__marker" style={{ left: "390px" }}>Wed</div>
               <div className="timelineMarkers__marker" style={{ left: "590px" }}>Thu</div>
               <div className="timelineMarkers__marker" style={{ left: "790px" }}>Fri</div>
            </>)}

         {width <= 768 && (
            <>
               <div className="timelineMarkers__marker" style={{ left: "180px" }}>Tue</div>
               <div className="timelineMarkers__marker" style={{ left: "380px" }}>Wed</div>
               <div className="timelineMarkers__marker" style={{ left: "580px" }}>Thu</div>
               <div className="timelineMarkers__marker" style={{ left: "780px" }}>Fri</div>
            </>)}
      </div>
   )
}

export default TimeLineMarkers