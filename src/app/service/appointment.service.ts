import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private listAppointments : Array<Appointment> = [

    {
      idAppointment: 1,
      idBarber: 2,
      idService: 2,
      barber: 'Kyrie Irving',
      img: '/assets/images/barber_team_05.jpg',
      service: 'Corte Masculino',
      date: '18/09/2020',
      time: '10:00'
    },

    {
      idAppointment: 2,
      idBarber: 1,
      idService: 1,
      barber: 'James Hardem',
      img: '/assets/images/barber_team_04.jpg',
      service: 'Barbas',
      date: '11/09/2020',
      time: '16:00'
    },

    {
      idAppointment: 3,
      idBarber: 6,
      idService: 7,
      barber: 'João Carlos',
      img: '/assets/images/barber_team_06.jpg',
      service: 'Manicure & Pedicure',
      date: '03/09/2020',
      time: '09:00'
    },

    {
      idAppointment: 4,
      idBarber: 4,
      idService: 3,
      barber: 'William Barbosa',
      img: '/assets/images/barber_team_01.jpg',
      service: 'Hidratação Capilar Masculina',
      date: '30/09/2020',
      time: '13:30'
    }
  ]

  constructor() { }

  addAppointment(appointment: Appointment) {
    this.listAppointments.push(appointment);
  }

  editAppointment(id : number) {
    for(const appointment of this.listAppointments) {
      if(appointment.idAppointment === id) {
        return appointment;
      }
    }
  }

  getListAppointments() {
    return this.listAppointments;
  }

  getAppointmentById(id: number) {          //Método que obtém o objeto pelo id do Barbeiro e retorna o objeto encontrado.
    for (const appointment of this.listAppointments) {
      if (id === appointment.idAppointment) {
        return appointment;
      }
    } 

    return null;
  }

  deleteAppointment(id: number) {
    for(let i=0; i < this.listAppointments.length; i++) {
      if(this.listAppointments[i].idAppointment === id) {
        this.listAppointments.splice(i, 1);
        break;
      }
    }
  }
}
