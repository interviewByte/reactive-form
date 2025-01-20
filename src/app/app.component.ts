import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsServicesService } from './services/forms-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
baseURL = 'http://localhost:8080/login'
  title = 'reactive-form';
  formBuilder = inject(FormBuilder)
  profileForm = this.formBuilder.group({
    name: [''],
    email: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
 constructor(private service: FormsServicesService) {}
 ngOnInit(): void {
   
 }
 onSubmit(): void {
  // this.service.submitForm(this.baseURL,this.profileForm.value).subscribe((res:any)=>{
  //   console.log("res______________________",res)
  // })
  console.log("profile data",this.profileForm.value)
 }

 updateProfile(): any {
  this.profileForm.patchValue({
    name: 'Nancy',
    address: {
      street: '123 Drew Street',
    },
  })
  console.log("form data",this.profileForm.value)
 }
}
