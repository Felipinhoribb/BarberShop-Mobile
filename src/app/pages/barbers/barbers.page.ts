import { Component, OnInit } from '@angular/core';
import { BarbersService } from 'src/app/service/barbers.service';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.page.html',
  styleUrls: ['./barbers.page.scss'],
})
export class BarbersPage implements OnInit {

  private listBarbers = [];

  constructor(private barberService : BarbersService) { 

    this.listBarbers = this.barberService.getListBarbers();
  }

  ngOnInit() {
  }

}
