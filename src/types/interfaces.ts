import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface UserProfileInterface {
   f_name: string,
   l_name: string,
   img: {
      url: string,
      alt: string,
   },
   position: string,
   completion_rate: number,
   projects: number,
   tasks: number,
   success: number,
   deadlines: number,
   messages: number,
}

export interface SidebarNavLinksInterface {
   id: number,
   link: string,
   icon: IconDefinition,
   name: string,
}

export interface TeamMember {
   id: number,
   name: string,
   img: string,
   position: string
}

export interface CurrentProjectsInterface {
   id: number,
   name: string,
   category: string,
   completion: number,
   weeks: number,
   daysLeft: number,
   teamMember: number[],
   priority: number,
}