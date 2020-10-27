import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Barber } from 'src/app/models/barbers.model'
import { BarbersService } from 'src/app/service/barbers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public barber: Barber = null;

  private id = null;

  constructor(private routeActive: ActivatedRoute,
              private barberService: BarbersService) {
    this.id = this.routeActive.snapshot.paramMap.get('id');

    this.id = Number(this.id);

    this.barber = this.barberService.getBarberById(this.id);
  }

  ngOnInit() {
  }

}
