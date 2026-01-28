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
  '/assets/img/img3.jpg',
  '/assets/img/img5.jpg',
];


  breakpoints = {
    640: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 3.5
    }
  };
}