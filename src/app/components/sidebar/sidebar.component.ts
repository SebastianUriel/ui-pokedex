import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebar_menu: any;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.http.get('./assets/sidebar-menu.json').subscribe(data => {
      this.sidebar_menu = data;
    });
  }

  showSubLevels(id: string) {
    for(let item of this.sidebar_menu) {
      const tag = document.querySelector('#'.concat(item.id));
      if(tag != null) {
        tag.classList.remove('open')
      }
    }
    const tag = document.querySelector('#'.concat(id));
    tag?.classList.toggle('open');
  }

}
