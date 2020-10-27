import { Component } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private listServices = [];

  constructor(private serviceServices : ServicesService) {
    this.listServices = this.serviceServices.getListService();
  }

  ngOnInit() {
  }

}
