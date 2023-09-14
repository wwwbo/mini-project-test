import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SearchComponent } from 'src/app/shared/search/search.component';
import { MenuList, Menus } from './navbar.model';
import { Subject, firstValueFrom, takeUntil } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onToggle = new EventEmitter<boolean>();

  onDestroy$ = new Subject<void>();

  menus: MenuList | undefined;

  constructor(
    public dialog: Dialog,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    const datas = await firstValueFrom(this.dataService.fetchMenu());

    if (datas) {
      this.menus = datas;
    }
  }

  ohShowSidenav() {
    this.onToggle.emit();
  }

  onClickSearch() {
    this.dialog.open(SearchComponent, {
      height: '30rem',
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
