import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menus } from '../../../assets/temp/menus.json';
import { MenuList, Menus } from '../navbar/navbar.model';
import { DataService } from 'src/app/services/data.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() onToggle = new EventEmitter<boolean>();

  menus: MenuList | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    await firstValueFrom(this.dataService.fetchMenu());

    const menuList = this.dataService.menuData$.value;
    if (menuList) {
      this.menus = menuList;
    }
  }

  onCloseSidenav() {
    this.onToggle.emit();
  }
}
