import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Video, Videos } from './video.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videoData: Videos | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    const datas = await firstValueFrom(this.dataService.fetchVideo());

    if (datas) {
      this.videoData = datas;
    }
  }
}
