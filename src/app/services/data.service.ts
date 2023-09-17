import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuList } from '../containers/navbar/navbar.model';
import { Activities } from '../pages/activity/activity.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  menuData$ = new BehaviorSubject<MenuList | null>(null);
  activityData$ = new BehaviorSubject<Activities | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  fetchMenu() {
    return this.http.get<MenuList>('assets/temp/menus.json').pipe(
      tap((data: MenuList) => {
        if (data) this.menuData$.next(data)
      })
    );
  }

  fetchActivity() {
    return this.http.get<Activities>('assets/temp/activity.json').pipe(
      tap((data: Activities) => {
        if (data) this.activityData$.next(data)
      })
    );
  }
}
