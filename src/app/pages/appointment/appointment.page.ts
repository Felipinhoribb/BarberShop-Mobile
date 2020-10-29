import { Component, OnInit } from '@angular/core';
import { Barber } from 'src/app/models/barbers.model';
import { BarbersService } from 'src/app/service/barbers.service';
import { ServicesService } from 'src/app/service/services.service';
import { AlertController } from '@ionic/angular';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from 'moment';
import { Service } from 'src/app/models/services.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  public objAppointment: Appointment;
  public objService: Service

  private idEdit;

  public barber: Barber = null;
  public apt: Appointment = null;

  private listBarbers: Array<Barber> = [];
  private listServices = [];

  private barberSelected;
  private serviceSelected;
  private dateSelected;
  private timeSelected;

  private barberAvatar: string = '';

  constructor(private alert: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService,
    private barberService: BarbersService,
    private servicesService: ServicesService) {

    this.objAppointment = {
      idAppointment: null,
      idBarber: null,
      idService: null,
      barber: '',
      img: '',
      service: '',
      date: '',
      time: ''
    };

    this.idEdit = Number(route.snapshot.paramMap.get('id'));

    if (this.idEdit != -1) {
      this.objAppointment = {
        idAppointment: appointmentService.getAppointmentById(this.idEdit).idAppointment,
        idBarber: appointmentService.getAppointmentById(this.idEdit).idBarber,
        idService: appointmentService.getAppointmentById(this.idEdit).idService,
        barber: appointmentService.getAppointmentById(this.idEdit).barber,
        img: appointmentService.getAppointmentById(this.idEdit).img,
        service: appointmentService.getAppointmentById(this.idEdit).service,
        date: appointmentService.getAppointmentById(this.idEdit).date,
        time: appointmentService.getAppointmentById(this.idEdit).time
      };

      this.barberAvatar = this.objAppointment.img;
      this.serviceSelected = this.objAppointment.idService;
    }

    this.listBarbers = barberService.getListBarbers();
    this.listServices = servicesService.getListService();
  }

  ngOnInit() {
  }

  setAvatar(event) {
    this.barberSelected = event.detail;
    let valor = this.barberSelected.value;
    valor = Number(valor)
    this.updateImg(valor);
    console.log(valor)
  }

  updateImg(id) {
    for (const barber of this.listBarbers) {
      //console.log(id + '===' + barber.idBarber);
      if (id === barber.idBarber) {
        this.barberAvatar = barber.img;
        //console.log(this.barberAvatar.toString());
      }
    }
  }

  agendar() {

    if (this.idEdit != -1) {
      this.barber = this.getBarber(this.objAppointment.idBarber);
      this.objAppointment.service = this.getService(this.objAppointment.idService);

      this.objAppointment.barber = this.barber.name;
      this.objAppointment.img = this.barber.img;

      this.objAppointment.date = moment(this.objAppointment.date).format('DD/MM/YYYY');
      //this.objAppointment.time = moment(this.objAppointment.time).format("HH:mm");

      this.appointmentService.editAppointment(this.objAppointment.idAppointment, this.objAppointment);
      this.router.navigateByUrl('/list');

    } else {
      this.objAppointment.idAppointment = this.appointmentService.getListAppointments().length + 1;
      this.barber = this.getBarber(this.objAppointment.idBarber);
      this.objAppointment.service = this.getService(this.objAppointment.idService);

      this.objAppointment.barber = this.barber.name;
      this.objAppointment.img = this.barber.img;

      this.objAppointment.date = moment(this.objAppointment.date).format('DD/MM/YYYY');
      this.objAppointment.time = moment(this.objAppointment.time).format("HH:mm");

      this.appointmentService.addAppointment(this.objAppointment);
      this.router.navigateByUrl('/list');
    }
  }

  getBarber(id: number): Barber {
    let item = null;

    for (const obj of this.listBarbers) {
      if (obj.idBarber == id) {
        return obj;
      }
    }

    return item;
  }

  getService(id: number): string {
    let item = null;

    for (const obj of this.listServices) {
      if (obj.idService == id) {
        return obj.name;
      }
    }

    return item;
  }

  async femaleServiceAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Apagar',
      message: 'O(s) serviço(s) solicitado(s) só pode(m) ser feito(s) pela profissional Ana Cristina!',
      buttons: [
        {
          text: 'Confirmar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm: blah');
          }
        }
      ]
    });

    await alert.present();
  }
}
