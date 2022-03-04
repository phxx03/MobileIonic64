import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginresult',
  templateUrl: './loginresult.page.html',
  styleUrls: ['./loginresult.page.scss'],
})
export class LoginresultPage implements OnInit {
  s1: string;
  s2: string;
  s3: string;

  constructor(public acroute: ActivatedRoute) { }

  ngOnInit() {
    const result = this.acroute.snapshot.paramMap.get('dataobj');
    const parseResult = JSON.parse(result);
    this.s1 = parseResult["myname"];
    //console.log(parseResult["myname"]);
    //console.log(parseResult);
  }

}
