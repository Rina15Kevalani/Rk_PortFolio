import { Component } from '@angular/core';
import { Education } from 'src/education';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute:'Charusat University, changa',
      course: 'MCA',
      duration:'2021-2023',
      grade:'A',
    },
    {
      institute:'Shree Guru govind University, godhra',
      course: 'BSC(MATHS)',
      duration:'2018-2021',
      grade:'A',
    },
    {
      institute:'Aarav School',
      course: 'HSC',
      duration:'2014-2016',
      grade:'C',
    },
      {
        institute:'S.R.Dave Kanya vidhyalaya',
        course: 'SSC',
        duration:'2014-2016',
        grade:'B',
      },
  ]
}
