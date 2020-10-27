import { Component, OnInit } from '@angular/core';
import {  } from '../barbers/barbers.module'
import { AppointmentService } from 'src/app/service/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  private listAppointments = []

  private appointment : Appointment = null;

  constructor(private alert : AlertController,
              private serviceAppointments : AppointmentService) {
    this.listAppointments = serviceAppointments.getListAppointments();
  }

  ngOnInit() {
  }

  deleteAppointment(id : number) {
    this.serviceAppointments.deleteAppointment(id); //this.appointment.idAppointment
  }

  async deleteAlert(id: number) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Apagar',
      message: 'Deseja realmente remover o serviço agendado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.deleteAppointment(id);
          }
        }
      ]
    });

    await alert.present();
  }
}
