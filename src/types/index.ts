export interface INavItem {
  label: string;
  icon: React.ComponentType;
}

export interface ISideBarData {
  subHeader: string;
  subMenu: INavItem[];
}
