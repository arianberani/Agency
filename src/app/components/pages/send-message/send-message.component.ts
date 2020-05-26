import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private httpClient: HttpClient, formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      phone: null,
      selection: null,
      message: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  public onSendMessage() {
    const values = this.formGroup.value;
    this.httpClient.post('http://localhost:3000/messages', values).subscribe(response => {

    });
  }

}
