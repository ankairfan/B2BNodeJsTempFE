import { AdminDecodeService } from './../../../services/admin-decode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  userName: string = "";

  constructor(private adminDecodeService:AdminDecodeService) { }

  ngOnInit(): void {
   this.userName = this.adminDecodeService.getUserName();
  }

}
