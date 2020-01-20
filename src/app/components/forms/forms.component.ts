import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  user = {
    name: ''
  }

  onSubmit(e) {
    console.log(e.controls['username'].value);
    console.log(this.user.name);
    console.log(e.controls['username'].status);
  }

  ngOnInit() {
  }

}
