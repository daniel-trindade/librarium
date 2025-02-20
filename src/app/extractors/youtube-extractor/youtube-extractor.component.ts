import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeApiService } from '../../services/youtube-api.service';

@Component({
  selector: 'app-youtube-extractor',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [YoutubeApiService],
  templateUrl: './youtube-extractor.component.html',
  styleUrl: './youtube-extractor.component.scss'
})

export class YoutubeExtractorComponent {

  constructor(private youtubeApiService: YoutubeApiService) {}

  // CONTROL VARIABLES
  showComplementarForm = false;
  yt_id = '';
  languages: any[] = [];
  selectedLanguage: string = '';
  yt_form!: FormGroup;

  ngOnInit() {
    this.yt_form = new FormGroup({
      url: new FormControl('', [Validators.required]),
      format: new FormControl('default'),
      language: new FormControl('default'),
      translate: new FormControl('default')
    });
  }

  get url() {
    return this.yt_form.get('url')!;
  }

  takeVideoSubtitles(){

    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\?v=|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    if(this.yt_form.invalid){
      return;
    }

    this.showComplementarForm = true;

    this.yt_id = this.yt_form.value.url.match(regex)![1];

    console.log(this.yt_id);
    this.getVideoSubtitles();

  }

  submitForm() {
    console.log(this.yt_form.value);
  }


  // SERVICE FUNCTIONS

  getVideoSubtitles(){
    this.youtubeApiService.getVideoData(this.yt_id).subscribe((data: any) => {
      if (data && data.video) {
        this.languages = data.video;
        console.log("Idiomas carregados:", this.languages);
      } else {
        this.languages = []; // Garante que não ocorra erro
      }
    });
  }

}
