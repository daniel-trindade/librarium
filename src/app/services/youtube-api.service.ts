import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class YoutubeApiService {

  private apiUrl = 'http://localhost:8000'; //URL da API

  constructor(private http: HttpClient) {}

  getVideoData(videoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/video/language?id_video=${videoId}`);
  }
}

//https://0ac1-201-77-106-156.ngrok-free.app/video/language_list?id_video=KcyszNFPFts
