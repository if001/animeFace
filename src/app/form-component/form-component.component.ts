import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });
  imgPreview = '';

    constructor(private fb: FormBuilder,
		private cd: ChangeDetectorRef,
		private router: Router
	       ) {}

    onFileChange(event) {
	const reader = new FileReader();

	if(event.target.files && event.target.files.length) {
	    const [file] = event.target.files;
	    reader.readAsDataURL(file);
	    reader.onload = (event) => {
		this.formGroup.patchValue({
		    file: reader.result
		});
		this.imgPreview = event.target.result;
		// need to run CD since file load runs outside of zone
		this.cd.markForCheck();
	    };
	}
    }

    ngOnInit() {}

    onSubmit(){
	console.log("hogehoge")
	this.router.navigate(['/result']);
    }
}
