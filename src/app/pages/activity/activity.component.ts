import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { firstValueFrom } from 'rxjs';
import { Activities } from './activity.models';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activityData: Activities | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    const datas = await firstValueFrom(this.dataService.fetchActivity());

    if (datas) {
      this.activityData = datas;
    }
  }

  getDescTime(time: number) {
    if (time === 1) {
      return 'second ago';
    } else if (time === 2) {
      return 'minus ago';
    } else if (time === 3) {
      return 'hour ago';
    } else if (time === 4) {
      return 'day ago';
    } else if (time === 5) {
      return 'week ago';
    }

    return 'month ago';
  }
}
