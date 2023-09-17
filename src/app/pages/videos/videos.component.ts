import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Videos } from './video.model';
import { VideosService } from './videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videoData: Videos | undefined;

  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    const datas = await firstValueFrom(this.videoService.fetchVideo());

    if (datas) {
      this.videoData = datas;
    }
  }
}
