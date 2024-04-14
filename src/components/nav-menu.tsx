import type React from 'react';
import NavItem from './nav-item';
import type { INavItem } from '~/types';

type NavMenuProp = {
  title: string;
  submenu: INavItem[];
};

const NavMenu: React.FC<NavMenuProp> = ({ title, submenu }) => {
  return (
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        {title}
      </h2>
      <div className="space-y-1">
        {submenu.map(({ label, icon }) => (
          <NavItem label={label} icon={icon} key={label} />
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
