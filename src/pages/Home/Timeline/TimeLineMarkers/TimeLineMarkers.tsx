import './timeLineMarkers.css'

function TimeLineMarkers() {
   return (
      <div className='timelineMarkers__list'>
         <div className="timelineMarkers__marker" style={{ left: "0" }}>Mon</div>
         <div className="timelineMarkers__marker" style={{ left: "200px" }}>Tue</div>
         <div className="timelineMarkers__marker" style={{ left: "400px" }}>Wed</div>
         <div className="timelineMarkers__marker" style={{ left: "600px" }}>Thu</div>
         <div className="timelineMarkers__marker" style={{ left: "800px" }}>Fri</div>
      </div>
   )
}

export default TimeLineMarkers