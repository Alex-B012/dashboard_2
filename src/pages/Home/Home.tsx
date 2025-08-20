import { userProfile } from "../../data/data";
import { currentProjects } from "../../data/projects";
import "./home.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import Projects from "./Projects/Projects";
import Stats from "./Stats/Stats";
import Timeline from "./Timeline/Timeline";
import Users from "./Users/Users";
import WelcomeBanner from "./WelcomeBanner/WelcomeBanner";

function Home() {
   return (
      <main className="content">
         <WelcomeBanner user={userProfile} number={currentProjects.length} />
         <ProfileCard user={userProfile} />
         <Projects />
         <Stats />
         <Timeline />
         <Users />
      </main>
   )
}

export default Home