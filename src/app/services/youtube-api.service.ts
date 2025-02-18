import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private apiUrl = '127.0.0.1:8000'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  // Função para obter dados do vídeo a partir do ID
  getVideoData(videoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/videos/language?video_id=${videoId}`); // Substitua pela sua URL da API
  }
}
