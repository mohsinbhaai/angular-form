import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{

  public m;

  submit(m) {
    console.log(m.value);
  }

  public contact = [
    {id: 1 , name: 'Apple'},
    {id: 2 , name: 'Mango'},
    {id: 3 , name: 'Banana'}
  ];

}
