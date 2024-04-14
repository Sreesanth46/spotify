import NavMenu from '~/components/nav-menu';
import { sidebarData } from '~/global/SidebarData';

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4">
      {sidebarData.map(({ subHeader, subMenu }) => (
        <NavMenu title={subHeader} submenu={subMenu} key={subHeader} />
      ))}
    </div>
  );
};

export default Sidebar;
