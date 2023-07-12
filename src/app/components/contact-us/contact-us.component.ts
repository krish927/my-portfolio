import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  control: any;
  invalidForm = false;
  constructor(public fb: FormBuilder) {
    this.validation()
    console.log(this.control = this.contactForm.controls);
    this.control = this.contactForm.controls;
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
