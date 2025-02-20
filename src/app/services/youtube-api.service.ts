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
    return this.http.get(`${this.apiUrl}/video/language_list?id_video=${videoId}`);
  }

  getExtract(videoId: string, language_code: string, doc_type: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/video?id_video=${videoId}&language_code=${language_code}&doc_type=${doc_type}`, { responseType: 'json' });
  }
}
