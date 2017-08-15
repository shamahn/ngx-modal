import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <a class="navbar-brand" href="https://github.com/Greentube/ngx-modal">ngx-dialog <span
        class="fa fa-github fa-inverse fa-1x"></span></a>
    </nav>
  `
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

}
