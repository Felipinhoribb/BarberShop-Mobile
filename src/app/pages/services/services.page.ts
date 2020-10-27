import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  private listServices = [];

  constructor(public serviceServices : ServicesService) { 
    this.listServices = this.serviceServices.getListService();
  }

  ngOnInit() {
  }
}
