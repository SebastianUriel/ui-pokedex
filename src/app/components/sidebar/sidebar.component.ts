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

  ngOnInit() {
    this.sidebar_menu = new Menu().data;
  }

  ngAfterViewInit() {
    const currentPath = window.location.pathname.split('/');
    currentPath.shift();
    if(currentPath[0].trim() !== '') {
      this.showSubLevels(currentPath[0]);
      currentPath.shift();
      for(let level of currentPath) {
        this.selectSubLevels(level);
      }
    } else {
      this.showSubLevels('home');
    }
  }

  showSubLevels(id: string) {
    this.resetShowSubLevels();
    this.resetSelectSubLevels();
    if(id.trim() !== '') {
      const mainTag = document.querySelector('#tag_'.concat(id));
      mainTag?.classList.toggle('select');
      const tag = document.querySelector('#'.concat(id));
      tag?.classList.toggle('open');
    }
  }

  selectSubLevels(id: string) {
    this.resetSelectSubLevels();
    if(id.trim() !== '') {
      const mainTag = document.querySelector('#tag_'.concat(id));
      mainTag?.classList.toggle('select');
    }
  }

  private resetShowSubLevels() {
    if(this.sidebar_menu != null) {
      for(let item of this.sidebar_menu) {
        const mainTag = document.querySelector('#tag_'.concat(item.id));
        mainTag?.classList.remove('select');
        const tag = document.querySelector('#'.concat(item.id));
        tag?.classList.remove('open');
      }
    }
  }

  private resetSelectSubLevels() {
    if(this.sidebar_menu != null) {
      for(let item of this.sidebar_menu) {
        if(item.sub_levels != null) {
          for(let sub_level of item.sub_levels) {
            const mainTag = document.querySelector('#tag_'.concat(sub_level.id));
            mainTag?.classList.remove('select');
          }
        }
      }
    }
  }

}
