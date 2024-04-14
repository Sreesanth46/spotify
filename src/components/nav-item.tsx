import type React from 'react';
import { Button } from './ui/button';
import type { INavItem } from '~/types';

const NavItem: React.FC<INavItem> = ({ icon: Icon, label }) => {
  return (
    <Button variant="ghost" className="w-full justify-start">
      <Icon />
      {label}
    </Button>
  );
};

export default NavItem;
