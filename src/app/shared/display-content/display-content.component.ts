import { Component, Input, OnInit } from '@angular/core';
import { Video, Videos } from 'src/app/pages/videos/video.model';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
  @Input() videoData: Videos | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.videoData);
  }
}
