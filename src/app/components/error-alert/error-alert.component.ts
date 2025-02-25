import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  imports: [],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.scss'
})
export class ErrorAlertComponent {
  @Input() message: string = '';
}
