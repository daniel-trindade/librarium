import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErrorAlertComponent } from '../../components/error-alert/error-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { selectValidator } from '../selectValidator';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-web-extractor',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, ErrorAlertComponent],
  templateUrl: './web-extractor.component.html',
  styleUrl: './web-extractor.component.scss'
})


export class WebExtractorComponent {

  constructor(private router: Router){}

  web_form!: FormGroup;

  ngOnInit() {
  
    //  FORM VALIDATION
    this.web_form = new FormGroup({
      url: new FormControl('', [Validators.required]),
      format: new FormControl('default', [
        Validators.required,
        selectValidator('default')
      ]),
    });

  }
  
  get url() {
    return this.web_form.get('url')!;
  }
  
  get format() {
    return this.web_form.get('format')!;
  }

  submitForm(){

    console.log("solicitação realizada")

    if(!this.web_form.get('url')?.value || this.web_form.get('format')?.value == 'default'){
        return;
      }
      const url_redirect = `http://localhost:8000/web/${this.web_form.value.url}?doc_type=${this.web_form.value.format}`;
      window.location.href = url_redirect; 
    }
}
