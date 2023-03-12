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
    const currentPath = window.location.pathname;
    this.showSubLevels(currentPath.split('/')[1]);
  }

  showSubLevels(id: string) {
    this.resetMenu();
    const tag = document.querySelector('#'.concat(id));
    tag?.classList.toggle('open');
  }

  private resetMenu() {
    if(this.sidebar_menu != null) {
      for(let item of this.sidebar_menu) {
        const tag = document.querySelector('#'.concat(item.id));
        if(tag != null) {
          tag.classList.remove('open')
        }
      }
    }
  }

}
