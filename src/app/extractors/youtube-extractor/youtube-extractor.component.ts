import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErrorAlertComponent } from '../../components/error-alert/error-alert.component';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { HttpClientModule } from '@angular/common/http';
import { selectValidator } from '../selectValidator';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-youtube-extractor',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    HttpClientModule, 
    CommonModule, 
    ErrorAlertComponent
  ],
  providers: [YoutubeApiService],
  templateUrl: './youtube-extractor.component.html',
  styleUrl: './youtube-extractor.component.scss'
})


export class YoutubeExtractorComponent {

  constructor(
    private youtubeApiService: YoutubeApiService,
    private router: Router
  ) { }


  // CONTROL VARIABLES

  showComplementarForm: boolean = false;
  showWarnning: boolean = false;
  yt_id: string = '';
  languages: any[] = [];
  selectedLanguage: string = '';
  yt_form!: FormGroup;

  ngOnInit() {

    //  FORM VALIDATION
    this.yt_form = new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)]
      ),
      format: new FormControl('default', [
        Validators.required,
        selectValidator('default')
      ]),
      language: new FormControl('default', [
        Validators.required,
        selectValidator('default')
      ]),
      translate: new FormControl('default')
    });
  }

  get url() {
    return this.yt_form.get('url')!;
  }
  
  get format() {
    return this.yt_form.get('format')!;
  }

  get language() {
    return this.yt_form.get('language')!;
  }

  takeVideoSubtitles() {

    if (this.yt_form.get('url')?.invalid) {
      this.showWarnning = true;
      return;
    }

    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\?v=|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    this.showComplementarForm = true;
    this.showWarnning = false;
    this.yt_id = this.yt_form.value.url.match(regex)![1];

    this.getVideoSubtitles();

  }

  submitForm() {
    if (this.yt_form.invalid) {
      return;
    }
    console.log(this.yt_form.value);

    this.getExtract();
  }


  // SERVICE FUNCTIONS

  getVideoSubtitles() {
    this.youtubeApiService.getVideoData(this.yt_id).subscribe((data: any) => {
      if (data && data.video) {
        this.languages = data.video;
        console.log("Idiomas carregados:", this.languages);
      } else {
        this.languages = []; // Garante que não ocorra erro
      }
    },
    (error) => {
      console.error('Erro ao carregar idiomas:', error);
    });
  }

  getExtract() {

    if (this.yt_form.get('translate')?.value != 'default') {
      const url_redirect = `http://localhost:8000/video/translate?id_video=${this.yt_id}&source_language_code=${this.yt_form.value.language}&target_language_code=${this.yt_form.value.translate}&doc_type=${this.yt_form.value.format}`;
      window.location.href = url_redirect;
      return;
    }

    const url_redirect = `http://localhost:8000/video?id_video=${this.yt_id}&language_code=${this.yt_form.value.language}&doc_type=${this.yt_form.value.format}`;
    window.location.href = url_redirect;
  }

}
