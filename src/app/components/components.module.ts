import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    BreadcrumbComponent,
    DropdownComponent,
    MenuComponent,
    MessageComponent,
    ModalComponent,
    NavbarComponent,
    PaginationComponent,
    PanelComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
