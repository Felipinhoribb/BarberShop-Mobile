import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.page.html',
  styleUrls: ['./barbers.page.scss'],
})
export class BarbersPage implements OnInit {

  private listBarbers = [
    {
      idBarber: 1,
      name: 'James Harden',
      occupation: 'Fundador & Barbeiro',
      description: 'Olá pessoal, sou diretor de arte sênior e fundador da BarberShop venha conferir nosso ambiente e inovações de moda que nós oferecemos.',
      img: '/assets/images/barber_team_04.jpg'
    },

    {
      idBarber: 2,
      name: 'Kyrie Irving',
      occupation: 'Barbeiro',
      description: 'Olá pessoal, sou barbeiro e estilista, além disso, trago os variados tipos de corte afro-americanos do EUA.',
      img: '/assets/images/barber_team_05.jpg'
    },

    {
      idBarber: 3,
      name: 'Allan Felipe',
      occupation: 'Barbeiro',
      description: 'Fala galera, eu sou o mais novo por aqui, mas especialista quando o assunto é estilo e inovação.',
      img: '/assets/images/barber_team_07.jpg'
    },

    {
      idBarber: 4,
      name: 'William Barbosa',
      occupation: 'Barbeiro',
      description: 'Meu apelido é Will, e sou da família BarberShop a um bom tempo sempre inovando em cortes que a comunidade adora.',
      img: '/assets/images/barber_team_01.jpg'
    },

    {
      idBarber: 5,
      name: 'Ana Cristina',
      occupation: 'Barbeira & Esteticista',
      description: 'Hey meninos e meninas, cuido do visual de ambos os sexos, visando sempre o bem estar dos meus clientes e fiel membro da família Barbershop.',
      img: '/assets/images/barber_team_09.jpg'
    },

    {
      idBarber: 6,
      name: 'João Carlos',
      occupation: 'Barbeiro',
      description: 'Fala Família, estamos em constante inovação do mercado quando o assunto é visual e beleza, na Barbershop são 10 anos de experiência, além de submeter aos clientes diversão e um ambiente bem descontraído.',
      img: '/assets/images/barber_team_06.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
