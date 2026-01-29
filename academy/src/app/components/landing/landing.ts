import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';



register();


@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Landing {
  public aulas = [
    {
      name:'Ballet Clássico',
      description:'Aulas focadas em técnica, expressão corporal e evolução contínua.'
    },
    {
      name:'Hip Hop',
      description:'Estilo urbano com muita energia, ritmo e coreografias modernas.'
    },
    {
      name:'Jazz Dance',
      description:'Movimentos dinâmicos que unem técnica, expressão e musicalidade'
    },
    {
      name:'Contemporâneo',
      description:'Liberdade de movimento, consciência corporal e expressão artística'
    },
    {
      name:'Jazz Funk',
      description:'Mistura de jazz com street dance, focado em atitude e performance.'
    },
    {
      name:'DanceHall',
      description:'Estilo jamaicano vibrante, com muita energia e identidade cultural'
    },
    {
      name:'Afrobeat',
      description:'Dança baseada em ritmos africanos, explorando força, fluidez e conexão.'
    },
    {
      'name':'K-Pop',
      'description':'Estilo coreano que combina dança, música e moda em performances cativantes.'
    }
  ];

  galleryImages = [
  '/assets/img/nucleo-people.JPEG',  
  '/assets/img/background-nucleo-img.jpg',
  '/assets/img/nucleo-test.jpg',
  '/assets/img/moment-nucleo.JPG',
  '/assets/img/nucleo2.jpg',
  '/assets/img/Nucleo5.jpg',
  '/assets/img/Nucleo4.jpg',
  '/assets/img/Nucleo3.jpg',
];

  breakpoints = {
    640: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 3.5
    }
  };

 public schedule = [
    {
      day: 'Segunda',
      classes: [
        'Jazz 18h - 19h', 'Hip Hop Iniciante II 19h30 - 20h30 ', 'Coreografia 20h30 - 21h30',
      ]
    },
    {
      day: 'Terça',
      classes: [
      'Alongamento - 19h30 - 20h30', 'Jazz & Contemporâneo 20h30 - 21h30',
      ]
    },
    {
      day: 'Quinta',
      classes: [
        'K-Pop 17h30 - 18h30',
        'Afro 18h30 - 19h30',
        'Dancehall & Coreografia 19h30 - 20h30'
      ]
    },
    {
      day: 'Sexta',
      classes: [
        'Jersey 18h - 19h ',
        'Jazz Funk 19h - 20h',
        'Heels 20h - 21h',
        'MasterClass 21h - 22h'
      ]
    },
    {
      day: 'Sábado',
      classes: [
        'Jazz Funk 10h - 11h',
        'Hip Hop Iniciante I 11h - 12h'
      ]
    }
  ];

}