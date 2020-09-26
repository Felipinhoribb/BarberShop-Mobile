import { Component, OnInit } from '@angular/core';
import {  } from '../barbers/barbers.module'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  private listAppointments = [

    {
      idAppointment: 1,
      barber: 'Kyrie Irving',
      img: '/assets/images/barber_team_05.jpg',
      service: 'Corte de Cabelo & Barba',
      date: '18/09/2020',
      time: '10:00',
      state: 'Success'
    },

    {
      idAppointment: 2,
      barber: 'James Hardem',
      img: '/assets/images/barber_team_04.jpg',
      service: 'Barba',
      date: '11/09/2020',
      time: '16:00',
      state: 'Danger'
    },

    {
      idAppointment: 3,
      barber: 'João Carlos',
      img: '/assets/images/barber_team_06.jpg',
      service: 'Pintura Capilar',
      date: '03/09/2020',
      time: '09:00',
      state: 'Danger'
    },

    {
      idAppointment: 4,
      barber: 'William Barbosa',
      img: '/assets/images/barber_team_01.jpg',
      service: 'Corte de Cabelo',
      date: '30/09/2020',
      time: '13:30',
      state: 'Success'
    }
  ]

  constructor() {
    
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
