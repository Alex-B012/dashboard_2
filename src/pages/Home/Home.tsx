import { userProfile } from "../../data/data";
import { currentProjects } from "../../data/projects";
import "./home.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import Projects from "./Projects/Projects";
import WelcomeBanner from "./WelcomeBanner/WelcomeBanner";

function Home() {
   return (
      <main className="content">
         <WelcomeBanner user={userProfile} number={currentProjects.length} />
         <ProfileCard user={userProfile} />
         <Projects />

         {/* <!-- Stats Section --> */}
         <section className="stats-section">
            <div className="section-title">
               <h2>Project Statistics</h2>
            </div>
            <div className="stats-grid">
               {/* <!-- Stats Card 1 --> */}
               <div className="card stat-card">
                  <div className="stat-icon design">
                     <i className="fas fa-tasks"></i>
                  </div>
                  <div className="stat-value">12</div>
                  <div className="stat-label">Total Projects</div>
               </div>
               {/* <!-- Stats Card 2 --> */}
               <div className="card stat-card">
                  <div className="stat-icon development">
                     <i className="fas fa-spinner"></i>
                  </div>
                  <div className="stat-value">5</div>
                  <div className="stat-label">In Progress</div>
               </div>
               {/* <!-- Stats Card 3 --> */}
               <div className="card stat-card">
                  <div className="stat-icon marketing">
                     <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="stat-value">7</div>
                  <div className="stat-label">Completed</div>
               </div>
            </div>
         </section>

         {/* <!-- Timeline Section --> */}
         <section className="card timeline-section">
            <div className="section-title">
               <h2>Task Distribution Time</h2>
               <a href="#" className="view-all"
               >View Full Timeline <i className="fas fa-arrow">
                  </i></a>
            </div>
            <div className="timeline-container">
               <div className="users-column">
                  <div className="user-row">
                     <div className="user-name">Benjamin Thompson</div>
                  </div>
                  <div className="user-row">
                     <div className="user-name">Sophia Carter</div>
                  </div>
                  <div className="user-row">
                     <div className="user-name">Ethan Harris</div>
                  </div>
                  <div className="user-row">
                     <div className="user-name">Alexander Wilson</div>
                  </div>
                  <div className="user-row">
                     <div className="user-name">Emily Davies</div>
                  </div>
               </div>

               <div className="timeline-area">
                  <div className="timeline-grid">
                     {/* <!-- Grid lines --> */}
                     {/* <div className="grid-line" style="top: 40px"></div> */}
                     {/* <div className="grid-line" style="top: 110px"></div> */}
                     {/* <div className="grid-line" style="top: 190px"></div> */}
                     {/* <div className="grid-line" style="top: 280px"></div> */}
                     {/* <div className="grid-line" style="top: 360px"></div> */}
                  </div>
                  {/* <!-- Time Markers --> */}
                  {/* <div className="time-marker" style="left: 0">Mon</div> */}
                  {/* <div className="time-marker" style="left: 200px">Tue</div> */}
                  {/* <div className="time-marker" style="left: 400px">Wed</div> */}
                  {/* <div className="time-marker" style="left: 600px">Thu</div> */}
                  {/* <div className="time-marker" style="left: 800px">Fri</div> */}
                  {/* <!-- Task Bars --> */}
                  {/* <div
                     className="task-bar"
                     style="top: 55px; left: 0; width: 120px; background: linear-gradient(135deg, #4361ee, #4895ef);"
                  >
                     Design Review
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 55px;
                  left: 400px;
                  width: 180px;
                  background: linear-gradient(135deg, #f72585, #ff6b96);
                "
                  >
                     Client Meeting
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 135px;
                  left: 200px;
                  width: 150px;
                  background: linear-gradient(135deg, #4cc9f0, #70e4ff);
                "
                  >
                     API Integration
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 135px;
                  left: 600px;
                  width: 220px;
                  background: linear-gradient(135deg, #4361ee, #4895ef);
                "
                  >
                     Frontend Development
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 220px;
                  left: 800px;
                  width: 200px;
                  background: linear-gradient(135deg, #f72585, #ff6b96);
                "
                  >
                     Content Creation
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 220px;
                  left: 0;
                  width: 180px;
                  background: linear-gradient(135deg, #4cc9f0, #70e4ff);
                "
                  >
                     Bug Fixing
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 220px;
                  left: 400px;
                  width: 150px;
                  background: linear-gradient(135deg, #4361ee, #4895ef);
                "
                  >
                     Testing
                  </div> */}
                  {/* <div
                     className="task-bar"
                     style="
                  top: 305px;
                  left: 200px;
                  width: 250px;
                  background: linear-gradient(135deg, #f72585, #ff6b96);
                "
                  >
                     Deployment
                  </div> */}
               </div>
            </div>
         </section>
         {/* <!-- Users Section --> */}
         <section className="users-section">
            <div className="users-title">
               <h2>Team Members</h2>
               <a href="#" className="view-all"
               >View All
                  <i className="fas fa-arrow-right"></i>
               </a>
            </div>
            <div className="users-grid">
               {/* <!-- User1 --> */}
               <div className="card user-card">
                  <div className="user-avatar-lg">
                     <img
                        src="./assets/images/project-mngt/person_15.webp"
                        alt="Benjamin"
                     />
                  </div>
                  <div className="user-info">
                     <h3>Benjamin Thompson</h3>
                     <p>Frontend Developer</p>
                  </div>
               </div>
               {/* <!-- User2 --> */}
               <div className="card user-card">
                  <div className="user-avatar-lg">
                     <img
                        src="./assets/images/project-mngt/person_17.webp"
                        alt="Sophia"
                     />
                  </div>
                  <div className="user-info">
                     <h3>Sophia Carter</h3>
                     <p>Project Manager</p>
                  </div>
               </div>
               {/* <!-- User3 --> */}
               <div className="card user-card">
                  <div className="user-avatar-lg">
                     <img
                        src="./assets/images/project-mngt/person_8.webp"
                        alt="Ethan"
                     />
                  </div>
                  <div className="user-info">
                     <h3>Ethan Harris</h3>
                     <p>UI/UX Designer</p>
                  </div>
               </div>
               {/* <!-- User4 --> */}
               <div className="card user-card">
                  <div className="user-avatar-lg">
                     <img
                        src="./assets/images/project-mngt/person_16.webp"
                        alt="Alexander"
                     />
                  </div>
                  <div className="user-info">
                     <h3>Alexander Wilson</h3>
                     <p>Marketing Specialist</p>
                  </div>
               </div>
               {/* <!-- User5 --> */}
               <div className="card user-card">
                  <div className="user-avatar-lg">
                     <img
                        src="./assets/images/project-mngt/person_21.webp"
                        alt="Emily"
                     />
                  </div>
                  <div className="user-info">
                     <h3>Emily Davies</h3>
                     <p>Backend Developer</p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default Home