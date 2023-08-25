import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  doesFormHasControls: boolean = false;
  constructor(private formBuilder: FormBuilder) {}
  dynamicFormGroup!: FormGroup;
  ngOnInit(): void {
    this.dynamicFormGroup = this.formBuilder.group({
      dynamicControls: this.formBuilder.array([]),
    });
  }
  get dynamicControls() {
    return this.dynamicFormGroup.get('dynamicControls') as FormArray;
  }

  addControl() {
    const control = this.formBuilder.control('');
    this.dynamicControls.push(control);
    this.doesFormHasControls = true;
  }
  // removeControl(index: number) {
  //   this.dynamicControls.removeAt(index);
  // }

  saveData(data: any) {
    console.log(data);
  }

  removeControl() {
    let indexToRemove: number[] = [];

    let fromArray = this.dynamicFormGroup.get('dynamicControls') as FormArray;
    fromArray.controls.forEach((control, index) => {
      if (!control.value.attributeDisplayName) {
        indexToRemove.push(index);
      }
    });
    indexToRemove.reverse().forEach((index) => {
      fromArray.removeAt(index);
    });
  }
}
