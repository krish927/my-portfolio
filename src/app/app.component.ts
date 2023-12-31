import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  contactForm!: FormGroup;
  control: any;
  invalidForm = false;
  constructor(private _sanitizer: DomSanitizer, public fb: FormBuilder) {
    this.validation()
    console.log(this.control = this.contactForm.controls);
    this.control = this.contactForm.controls;
  }
  aboutLinks = [
    {
      title: 'Email Address',
      linkTitle: 'krishankant349@gmail.com',
      link: 'mailto:name@email.com',
      iconClass:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27AE60" class="bi bi-envelope-at-fill" viewBox="0 0 16 16"> <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/> <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/> </svg>',
    },
    {
      title: 'Phone',
      linkTitle: '8745061141',
      link: 'tel:+918745061141',
      iconClass:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27AE60" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/> </svg>',
    },
    {
      title: 'GitHub',
      linkTitle: 'krish927',
      link: 'https://github.com/krish927',
      iconClass:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27AE60" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>',
    },
    {
      title: 'Linkedin',
      linkTitle: 'Krishan Kant Gautam',
      link: 'https://www.linkedin.com/in/krishan-kant-gautam-472a37161/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in',
      iconClass:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27AE60" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>',
    },
  ];

  skills = [
    'Proficient in HTML, CSS, and JavaScript, the building blocks of modern web development.',
    'Experience with frontend frameworks like Angular and React, enabling the development of dynamic and interactive user interfaces.',
    'Strong understanding of responsive design principles, ensuring optimal user experiences across various devices and screen sizes.',
    'Familiarity with version control systems like Git, facilitating collaborative development and efficient code management.',
    'Knowledge of UI/UX best practices, allowing me to create visually appealing designs and intuitive user interactions.',
    'Solid grasp of browser compatibility and performance optimization, delivering fast and seamless experiences to end-users.',
    'Continuous learning and exploration of emerging frontend technologies, staying up to date with the latest industry trends.',
  ];

  experiences = [
    'Developed and implemented responsive website layouts, ensuring optimal user experiences and accessibility.',
    'Integrated APIs and backend services to build dynamic and data-driven web applications.',
    'Collaborated closely with UI/UX designers, translating their mockups and wireframes into functional and visually appealing interfaces.',
    'Optimized website performance through code refactoring, image optimization, and efficient caching techniques.',
    'Conducted thorough testing and debugging, ensuring high-quality and bug-free code.',
    'Actively participated in code reviews and provided constructive feedback to improve overall code quality and maintainability.',
  ];

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

  skills_logo = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
    "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://camo.githubusercontent.com/9eecc42439347332f256a326363924551042f5b96235f972982512199476611a/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
  ]
  getSVGImageUrl(svg: any) {
    // console.log(svg);
    let base64string = btoa(svg);
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/svg+xml;base64,${base64string}`
    );
  }

  validation(){
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      number: ['', Validators.compose([Validators.minLength(10), Validators.required, Validators.maxLength(15), Validators.pattern("^[0-9]*$")])],
      message: ['', Validators.required]
    });
  }
  submit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }else{
      console.log("form is invalid");
      this.invalidForm = true;
      setTimeout(() => {
        this.invalidForm = false
      }, 3000);      
    }
  }
}
