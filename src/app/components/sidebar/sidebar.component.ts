import { AfterViewInit, Component } from '@angular/core';
import { Menu } from 'src/app/models/model/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  sidebar_menu?: any[];

  constructor() {
  }

  public ngOnInit() {
    this.sidebar_menu = new Menu().data;
  }

  public ngAfterViewInit() {
    const currentPath = window.location.pathname.split('/');
    currentPath.shift();
    if (currentPath[0].trim()) {
      this.displaySubLevels(currentPath[0]);
      currentPath.shift();
      for (let level of currentPath) {
        this.selectSubLevels(level);
      }
    } else {
      this.displaySubLevels('home');
    }
  }

  public displaySubLevels(id: string) {
    this.resetDisplayedSublevels();
    this.resetSelectSubLevels();
    if (id) {
      const mainTag = document.querySelector('#'.concat(id));
      mainTag?.setAttribute("class", "selected-option");
      const tag = document.querySelector('#sub_'.concat(id));
      tag?.setAttribute("class", "displayed-sublist");
    }
  }

  public selectSubLevels(id: string) {
    this.resetSelectSubLevels();
    if (id) {
      const mainTag = document.querySelector('#'.concat(id));
      mainTag?.setAttribute("class", "selected-option");
    }
  }

  private resetDisplayedSublevels() {
    if (this.sidebar_menu) {
      for (let item of this.sidebar_menu) {
        const mainTag = document.querySelector('#'.concat(item.id));
        mainTag?.setAttribute("class", "option");
        const tag = document.querySelector('#sub_'.concat(item.id));
        tag?.setAttribute("class", "sublist");
      }
    }
  }

  private resetSelectSubLevels() {
    if (this.sidebar_menu) {
      for (let item of this.sidebar_menu) {
        if (item.sub_levels) {
          for (let sub_level of item.sub_levels) {
            const tag = document.querySelector('#'.concat(sub_level.id));
            tag?.setAttribute("class", "option");
          }
        }
      }
    }
  }

}
