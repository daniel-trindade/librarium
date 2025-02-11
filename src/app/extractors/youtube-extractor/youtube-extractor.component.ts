import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-youtube-extractor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './youtube-extractor.component.html',
  styleUrl: './youtube-extractor.component.scss'
})

export class YoutubeExtractorComponent {
  // Criando o FormGroup e associando os campos ao formControlName correspondente
  yt_form = new FormGroup({
    url: new FormControl(''), // Campo para a URL do vídeo
    format: new FormControl('nt'), // Formato de arquivo
    language: new FormControl('nt'), // Linguagem de extração
    translate: new FormControl('nt') // Idioma para tradução
  });

  // Função para capturar e exibir os dados do formulário no console
  submitForm() {
    const url = this.yt_form.get('url')?.value ?? ''; // Atribuindo valor vazio caso seja null ou undefined
  
    if (url) {
      const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\?v=|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
  
      if (match) {
        const videoId = match[1];
        console.log('ID do vídeo:', videoId);
      } else {
        console.log('URL inválida ou ID não encontrado');
      }
    } else {
      console.log('URL não fornecida');
    }
  }
  
}
