import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Digital Clock',
      description: 'Digital Clock is like other clock which is created using JavaScript',
      image: '',
      url: ''
    },
    {
      name: 'Calculator',
      description: 'It is just a basic calculator',
      image: '',
      url:'https://kk-calculator-0707.netlify.app/'
    },
    {
      name: 'To Do',
      description: 'It is just a pratice project for user to make their daily to do tasks',
      image: '',
      url:''
    },
    {
      name: 'Dr Dev',
      description: 'Dr Dev is doctor based blog website where you can contact with doctor appoinntment',
      image: '',
      url:'https://main--kk-drdev.netlify.app/'
    },
    {
      name: 'Quiz App',
      description: 'It is just a pratice project for user interaction with some basic GK and Math questions',
      image: '',
      url:''
    },
    {
      name: 'News App',
      description: 'It is a simple news application which show news from different news agencies.',
      image: '',
      url:'https://main--kk-news-app-0707.netlify.app/'
    },

  ]
}
