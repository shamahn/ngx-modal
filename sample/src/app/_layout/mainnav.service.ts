import { Injectable } from '@angular/core';

export interface INavItem {
  icon?: string;
  text: string;
  url?: string | string[];
}

@Injectable()
export class MainNavService {
  navigation: INavItem[] = [
    {
      text: 'Simple modal',
      icon: 'app-icon-server',
      url: '/simple-modal'
    },
    {
      text: 'Custom Component',
      icon: 'app-icon-server',
      url: '/custom-component'
    }
  ];
}
