import { SidebarNavLinksInterface } from "../types/interfaces";

import user_img from "../assets/images/person_10.webp";
import benjamin_img from "../assets/images/person_15.webp";
import sophia_img from "../assets/images/person_17.webp";
import ethan_img from "../assets/images/person_8.webp";
import alexander_img from "../assets/images/person_16.webp";
import emily_img from "../assets/images/person_21.webp";


import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export const icons = {
   bars: faBars,
   search: faMagnifyingGlass,
   sun: faSun,
   moon: faMoon,
   bell: faBell,
   code: faCode,
   home: faHouse,
   projects: faDiagramProject,
   calendar: faCalendarDays,
   team: faPeopleGroup,
   reports: faChartPie,
   settings: faGear,
}

export const sidebarNavLinks: SidebarNavLinksInterface[] = [
   {
      id: 1,
      link: "/",
      icon: icons.home,
      name: "Dashboard",
   }, {
      id: 2,
      link: "/projects",
      icon: icons.projects,
      name: "Projects",
   },
   {
      id: 3,
      link: "/calendar",
      icon: icons.calendar,
      name: "Calendar",
   }, {
      id: 4,
      link: "/team",
      icon: icons.team,
      name: "Team",
   }, {
      id: 5,
      link: "/reports",
      icon: icons.reports,
      name: "Reports",
   }, {
      id: 6,
      link: "/settings",
      icon: icons.settings,
      name: "Dashboard",
   }
]

export const userProfile = {
   f_name: "Olivia",
   l_name: "Johnson",
   img: {
      url: user_img,
      alt: "User profile",
   },
   position: "Project Manager",
   completion_rate: 75,
   projects: 12,
   tasks: 24,
   success: 89,
   deadlines: 2,
   messages: 5,
}

export const team = [
   {
      id: 1,
      name: "Benjamin Thompson",
      img: benjamin_img,
      position: "Frontend Developer"
   },
   {
      id: 2,
      name: "Sophia Carter",
      img: sophia_img,
      position: "Project Manager"
   },
   {
      id: 3,
      name: "Ethan Harris",
      img: ethan_img,
      position: "UI/UX Designer"
   },
   {
      id: 4,
      name: "Alexander Wilson",
      img: alexander_img,
      position: "Marketing Specialist"
   },
   {
      id: 5,
      name: "Emily Davies",
      img: emily_img,
      position: "Backend Developer"
   }
]

export const footerData = "© 2025 Dashboard. All rights reserved."