import { ReactElement } from "react";

export interface SidebarItem {
    name: string;
    icon: ReactElement | null;
    route: string | null
    children?: SidebarItem[];
  }
  
  export interface SidebarGroup {
    title: string;
    items: SidebarItem[];
  }
