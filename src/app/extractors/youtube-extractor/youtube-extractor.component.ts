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

  showComplementarForm = false;
  yt_id = '';
  

  yt_form!: FormGroup;

  ngOnInit() {
    this.yt_form = new FormGroup({
      url: new FormControl('', [Validators.required]),
      format: new FormControl('txt'),
      language: new FormControl('pt'),
      translate: new FormControl('pt')
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

  getVideoSubtitles(){
    this.youtubeApiService.getVideoData(this.yt_id).subscribe((data: any) => {
      console.log(data);
    });
  }

}
