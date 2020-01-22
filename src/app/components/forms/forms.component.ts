import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  user = {
    name: '',
    power: ''
  }


// controls is an array in the ngForm, with key names equal to the 'name' attribute on the input
  onSubmit(e) {
    console.log(e.controls['username'].value);
    console.log(this.user.name);
    console.log(e.controls['username'].status);
    console.log(this.user.power);
    console.log(e.controls['power'].value);
  }

  ngOnInit() {
  }

}
