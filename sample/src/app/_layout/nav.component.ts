import { Component, OnInit } from '@angular/core';
import { INavItem, MainNavService } from './mainnav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  navigation: INavItem[];

  constructor(navService: MainNavService) {
    this.navigation = navService.navigation;
  }


  ngOnInit() {
  }

}
