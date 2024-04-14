import type { ISideBarData } from '~/types';
import { PlayCircleOutlined } from '~/icons';

export const sidebarData: ISideBarData[] = [
  {
    subHeader: 'Discover',
    subMenu: [
      {
        label: 'Listen Now',
        icon: PlayCircleOutlined
      }
    ]
  }
];
