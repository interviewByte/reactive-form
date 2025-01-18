import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  
  certificationForm: FormGroup;
  certificationDisplay: { url: string, pdf_name: string }[] = [];
  pdfFile: File | null = null;
  pdfName: string = '';
  documentCount: number = 0;
  maxDocuments: number = 5;

  constructor(private fb: FormBuilder) {
    this.certificationForm = this.fb.group({
      pdfFile: [null, ],
      pdfName: [''],
      certication: new FormArray([
        this.fb.group({
          pdf_name: ['pdf', []],
          url: ['url', []]
        })
      ])
    });
  }

  ngOnInit() {
   this.testing()
  }
  

  // Create an individual certification form group
  // createCertificationFormGroup(): FormGroup {
  //   return this.fb.group({
  //     pdf_name: ['pdf', []],
  //     url: ['url', []]
  //   });
  // }

  // Handle file input change
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.pdfFile = file;
    }
  }

  // Handle name input change
  onNameChange(event: any) {
    this.pdfName = event.target.value;
  }
  testing():void{
    console.log("this.certificationForm.get('certification') as FormArray",this.certificationForm.value.certication)
  }

  // Add button click handler
  onAdd() {
    if (this.pdfFile && this.pdfName) {
      const fileUrl = URL.createObjectURL(this.pdfFile); 
      this.certificationDisplay?.push({
        url: fileUrl,
        pdf_name: this.pdfName
      });
    

      // const certificationFormArray = this.certificationForm.get('certification') as FormArray;
            const certificationFormArray = this.certificationForm.value.certication;

      console.log("certificationFormArray",certificationFormArray)
      certificationFormArray?.push(({
        pdf_name: this.pdfName,
        url: fileUrl
      }));
      console.log("certificationFormArray",certificationFormArray)

     
      // Reset the form after adding
      this.pdfFile = null;
      this.pdfName = '';
      this.documentCount++;

      // Disable Add More Documents if 5 documents are uploaded
      if (this.documentCount >= this.maxDocuments) {
        alert("You can upload a maximum of 5 documents.");
      }
    }
  }

  // Add More Documents button click handler
  onAddMore() {
    if (this.documentCount < this.maxDocuments) {
      this.onAdd();
    }
  }

mysubmitForm() {
  console.log("this.submit",this.certificationForm.value)
}
}

