import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from './http.service.ts';

@Component({
  selector: 'sq-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpService]
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getAccountVerificationData().subscribe(
          (data: Response) => console.log(data.json())
      );
  }

}
