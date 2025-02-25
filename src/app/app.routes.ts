import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { YoutubeExtractorComponent } from './extractors/youtube-extractor/youtube-extractor.component';
import { WebExtractorComponent } from './extractors/web-extractor/web-extractor.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: AboutComponent},
    {path: 'contatos', component: ContactComponent},
    {path: 'extratores/youtube', component: YoutubeExtractorComponent},
    {path: 'extratores/web-extractor', component: WebExtractorComponent}
];
