import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('blink', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1s ease-in-out')),
    ]),
  ],
})
export class AboutComponent {

downloadCV(){
      const cvFileURL = '../../assets/Rina kevalani CV.pdf';
      const link = document.createElement('a');
      link.href = cvFileURL;
      link.download = 'Resume.pdf'; // Change the filename for the downloaded file
      link.click();
    }

}
