import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Videos } from "./video.model";
import { BehaviorSubject, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VideosService {

    videoData$ = new BehaviorSubject<Videos | null>(null);

    constructor(private http: HttpClient) { }

    fetchVideo() {
        return this.http.get<Videos>('assets/temp/videos.json').pipe(
            tap((data: Videos) => {
                if (data) this.videoData$.next(data)
            })
        );
    }
}