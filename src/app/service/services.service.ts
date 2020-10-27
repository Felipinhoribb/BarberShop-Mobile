import { Injectable } from '@angular/core';
import { Service } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private listServices: Array<Service> = [
    {
      idService: 1,
      name: 'Barbas',
      img: '/assets/images/barber_service_01.jpg',
      description: 'Para os clientes que buscam aparar, cortar ou mudarem o estilo da barba.'
    },

    {
      idService: 2,
      name: 'Corte Masculino',
      img: '/assets/images/barber_service_03.jpg',
      description: 'Serviço é destinado ao corte de cabelo e para os clientes que buscam cabelos mais modernos atualmente.'
    },

    {
      idService: 3,
      name: 'Hidratação Capilar Masculina',
      img: '/assets/images/barber_service_06.jpg',
      description: 'Serviço clássico e completo, que compõe a barba feita e o corte de cabelo.'
    },

    {
      idService: 4,
      name: 'Corte Feminino',
      img: '/assets/images/barber_service_08.jpg',
      description: 'A Barbershop conta com cortes de cabelo feminino, para quem quer inovação em moda feminina.  ' +
      'Além disso, contamos com diversas opções para cabelos crespos, cacheados e entre outros.'
    },

    {
      idService: 5,
      name: 'Maquiagens',
      img: '/assets/images/barber_service_07.jpeg',
      description: 'Preparamos para nossas clientes, um ambiente livre de escolha de cores. Para que o público ' +
      'feminino possa explorar vários estilos diferentes. Preparamos este serviço para pessoas que necessitem ' +
      'de maquiagem para eventos, festas e entre outros.'
    },

    {
      idService: 6,
      name: 'Hidratação Capilar Feminina',
      img: '/assets/images/barber_service_09.jpg',
      description: 'Para os clientes que buscam aparar, cortar ou mudarem o estilo da barba.'
    },

    {
      idService: 7,
      name: 'Manicure & Pedicure',
      img: '/assets/images/barber_service_10.jpg',
      description: 'Serviço para o cuidado de pés e mãos dos nossos clientes. ' +
      'O nosso público é para ambos os gêneros, com o intuito da suavidade e bem estar de pés e mãos.'
    },

    {
      idService: 8,
      name: 'Produtos',
      img: '/assets/images/produtos_barbearia.jpg',
      description: 'A BarberShop também vende alguns produtos a parte que podem ser adquiridos.' +
      'Estes produtos são confeccionados por nós ou adquiridos em várias outras partes do mundo,' +
      'promovendo os melhores produtos aos nossos clientes.'
    }
  ];

  constructor() { }

  getListService() {
    return this.listServices;
  }
}
