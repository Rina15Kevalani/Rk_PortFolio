import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  downloadCV(){
    const cvFileURL = '../../assets/Rina kevalani CV.pdf';
    const link = document.createElement('a');
    link.href = cvFileURL;
    link.download = 'Resume.pdf'; 
    link.click();
  }

}
