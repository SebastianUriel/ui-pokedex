import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu } from 'src/app/models/model/menu';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  menu?: any[];
  breadcrumb?: any[];
  lastBreadcrumb?: any;

  constructor(private router: Router) {
    this.menu = new Menu().data;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumb = [];
        const path = event.url.split('/');
        path.shift();
        let mainContent = this.menu?.find(value => value.path === '/'.concat(path[0]));
        this.breadcrumb?.push(mainContent);
        path.shift();
        for(let level of path) {
          this.breadcrumb?.push(mainContent.sub_levels?.find((value: { path: string; }) => value.path === '/'.concat(level)));
        }
        this.lastBreadcrumb = this.breadcrumb.pop();
      }
    });
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
  }

}
