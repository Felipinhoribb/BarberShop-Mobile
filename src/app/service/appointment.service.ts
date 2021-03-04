import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private listAppointments : Array<Appointment> = []

  constructor() { }

  addAppointment(appointment: Appointment) {
    this.listAppointments.push(appointment);
  }

  editAppointment(id: Number, apt : Appointment) {
    for(const appointment of this.listAppointments) {
      if(appointment.idAppointment === id) {
        appointment.idBarber = apt.idBarber;
        appointment.idService = apt.idService;
        appointment.barber = apt.barber;
        appointment.img = apt.img;
        appointment.service = apt.service;
        appointment.date = apt.date;
        appointment.time = apt.time;
      }
    }
  }

  getListAppointments() {
    return this.listAppointments;
  }

  //Método que obtém o objeto pelo id do Barbeiro e retorna o objeto encontrado.
  getAppointmentById(id: number) {
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
