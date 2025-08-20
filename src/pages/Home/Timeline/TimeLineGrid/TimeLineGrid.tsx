import './timeLineGrid.css'

function TimeLineGrid() {
   return (
      <div className="timeLineGrid__container">
         <div className="timeLineGrid__line" style={{ top: "30px" }}></div>
         <div className="timeLineGrid__line" style={{ top: "110px" }}></div>
         <div className="timeLineGrid__line" style={{ top: "190px" }}></div>
         <div className="timeLineGrid__line" style={{ top: "280px" }}></div>
         <div className="timeLineGrid__line" style={{ top: "370px" }}></div>
      </div>
   )
}

export default TimeLineGrid