import { Injectable } from '@angular/core';
import { Barber } from '../models/barbers.model';


@Injectable({
  providedIn: 'root'
})
export class BarbersService {

  private listBarbers: Array<Barber> = [
    {
      idBarber: 1,
      name: 'James Harden',
      occupation: 'Fundador & Barbeiro',
      description: 'Olá pessoal, sou diretor de arte sênior e fundador da BarberShop venha conferir nosso ambiente e inovações de moda que nós oferecemos.',
      img: '/assets/images/barber_team_04.jpg',
      location: 'Houston',
      graduation: 'DePaul University & cursos de aperfeiçoamento em Jays Barbershop & Shave',
      history: 'Sou James Hardem, venho da cidade de Houston, de onde nasci e fui criado pelos meus pais.'+
      ' Me formei na Universidade de DePaul e fui traçando minha carreira pelas cidades dos EUA, onde'+
      'tive a oportunidade de obter mais conhecimento e experiência. Logo, em 2010 me mudei para o Brasil'+
      ', e logo me apaixonei pela cidade. Então, criei a Barbershop com a ajuda de outros profissionais, '+
      'e estamos no mercado a bastante tempo ajudando as pessoas com sua aparência e bem estar.',
      hair: 20.00,
      barber: 13.00,
      other_service: 10,
      age: 28
    },

    {
      idBarber: 2,
      name: 'Kyrie Irving',
      occupation: 'Barbeiro & Co-Fundador',
      description: 'Olá pessoal, sou barbeiro e estilista, além disso, trago os variados tipos de corte afro-americanos do EUA.',
      img: '/assets/images/barber_team_05.jpg',
      location: 'Brooklyn',
      graduation: 'Duke University & Cursos Complementares em Brooklyn Haircut',
      history: 'Estou no Brasil desde 2010, juntamente com James Hardem e nos juntamos para a criação da '+
      'Barbershop. Eu nasci no EUA na cidade de Brooklyn e aos 19 anos entrei para universidade Duke'+
      'Me formei em 2005 e trabalhei em diversas barbearias das cidades de Brooklyn, Carolina do Norte'+
      ' e Los Angeles. Tento trazer toda a minha experiência, para o país brasileiro, para que nossos clientes '+
      'possam poder escolher o melhor visual e bem estar para festas, compromissos e eventos.',
      hair: 20.00,
      barber: 12.00,
      other_service: 10.00,
      age: 25
    },

    {
      idBarber: 3,
      name: 'Allan Felipe',
      occupation: 'Barbeiro',
      description: 'Fala galera, eu sou o mais novo por aqui, mas especialista quando o assunto é estilo e inovação.',
      img: '/assets/images/barber_team_07.jpg',
      location: 'Belo Horizonte',
      graduation: 'Instituto Técnico do Cabeleireiro',
      history: 'Galera conclui o meu curso em 2017, e de lá para cá, passei por diversas barbearias, como '+
      'barbearia do Fernando, Nossa Barbearia BH, Torres Barbearia e entre outros lugares. Fiz também alguns, '+
      'alguns cursos complementares na cidade de BH. Atualmente, moro em Belo Horizonte e curso o curso de '+
      'design de moda na Faculdade Dom Helder e trabalho na barbearia a 1 ano, atendendo a todos os gostos.',
      hair: 15.00,
      barber: 10.00,
      other_service: 7,
      age: 22
    },

    {
      idBarber: 4,
      name: 'William Barbosa',
      occupation: 'Barbeiro',
      description: 'Meu apelido é Will, e sou da família BarberShop a um bom tempo sempre inovando em cortes que a comunidade adora.',
      img: '/assets/images/barber_team_01.jpg',
      location: 'Belo Horizonte',
      graduation: 'Broadway Instituto de formação de profissionais da beleza',
      history: 'Estou aqui desde 2014, e acompanho intensamente o trabalho dos estrangeiros James Hardem e'+
      'Kyrie Irving que poderam me instruir e melhorar em meu trabalho. Me formei no instituto Broadway '+
      'que fica aqui mesmo em BH e realizei diversos cursos complementares na cidade, além de ter experiências '+
      'em diversas barbearias da cidade de BH. Trago a inocação em e a diversificação de design em moda, '+
      'para o bem estar de crianças, adolescentes, adultos e idosos',
      hair: 17,
      barber: 8,
      other_service: 8,
      age: 26
    },

    {
      idBarber: 5,
      name: 'Ana Cristina',
      occupation: 'Barbeira & Esteticista',
      description: 'Hey meninos e meninas, cuido do visual de ambos os sexos, visando sempre o bem estar dos meus clientes e fiel membro da família Barbershop.',
      img: '/assets/images/barber_team_09.jpg',
      location: 'Contagem',
      graduation: "Instituto Embelleze & Instituto L 'Oréal",
      history: 'Entrei na Barbershop em 2018, conclui os cursos de esteticista, manicure e barbeira e obtive '+
      'experiências por diversos lugares onde passei, aumentando o meu conhecimento na área da beleza. '+
      'Atendo a todos os sexos desde crianças a idosos, com o objetivo de prover a melhor aparência, bem '+
      'estar, comodidade e alegria para os meus clientes. Os preços são para mulheres, pois, a maioria da '+
      'clientela é feminina, mas também atendo a diversos homens que adoram as inovações de mercado que ofereço. '+
      'Os preços variam de acordo com o sexo, uma vez que os gostos são diferentes, sejam bem vindos!',
      hair: 30,
      barber: 8,
      other_service: 15,
      age: 25
    },

    {
      idBarber: 6,
      name: 'João Carlos',
      occupation: 'Barbeiro',
      description: 'Fala Família, estamos em constante inovação do mercado quando o assunto é visual e beleza, na Barbershop são 10 anos de experiência, além de submeter aos clientes diversão e um ambiente bem descontraído.',
      img: '/assets/images/barber_team_06.jpg',
      location: 'Betim',
      graduation: 'Barbearia Seu Elias',
      history: 'Família, eu tive muito trabalho duro e esforço para chegar onde cheguei hoje, digo isto, '+
      'pois fiz apenas um curso em toda a minha carreira de barbeiro, devido a isto, tive que percorrer '+
      'por diversos lugares da parte de Betim atrás de conhecimento, não foi fácil, mas obtive um mérito reconhecido '+
      'na cidade de Betim e me orgulho disto. Logo depois, vim para BH e realizei meu curso de aperfeiçoamento '+
      'na barbearia mais reconhecida de BH, onde me abriu um leque de oportunidades, onde uma delas foi a Barbershop, '+
      'a qual tenho orgulho de dizer que faço parte e atualmente um dos barbeiros mais reconhecidos da região. '+
      'A família Barbershop eleva as pessoas toda descontração, com ambiente muito agradável e muito estilo aos '+
      'clientes com visual bastante atraente para os diversos compromissos.',
      hair: 18,
      barber: 10,
      other_service: 10,
      age: 29
    },
  ];

  constructor() { 
    
  }

  getBarberById(id: number) {          //Método que obtém o objeto pelo id do Barbeiro e retorna o objeto encontrado.
    for (const barber of this.listBarbers) {
      if (id === barber.idBarber) {
        return barber;
      }
    } 

    return null;
  }

  getListBarbers() {
    return this.listBarbers;
  }
}
