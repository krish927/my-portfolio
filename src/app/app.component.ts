import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  aboutLinks = [
    {
      title: 'Email Address',
      linkTitle: 'krishankant349@gmail.com',
      link: 'mailto:name@email.com'
    },
    {
      title: 'Phone',
      linkTitle: '8745061141',
      link: 'tel:+918745061141'
    },
    {
      title: 'GitHub',
      linkTitle: 'krish927',
      link: 'https://github.com/krish927'
    },
    {
      title: 'Linkedin',
      linkTitle: 'Krishan Kant Gautam',
      link: 'https://www.linkedin.com/in/krishan-kant-gautam-472a37161/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'
    },
  ]
}
