import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
}
