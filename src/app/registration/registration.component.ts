import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userForm: any;


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      'username' : new FormControl('',Validators.required),
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'mobile' : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'image' : new FormControl('',[Validators.required])
    });

    console.log("the newly created form and its fields are : ",this.userForm)
  }

  registerUser(){
    console.log(this.userForm)
  }


  getFormField(field:any){
    return this.userForm.get(field);
  }

}
