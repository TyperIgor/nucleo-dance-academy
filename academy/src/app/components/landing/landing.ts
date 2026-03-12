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
      description:'Mistura das Danças Acadêmicas e Urbanas, focado em atitude e performance.'
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
    },
    {
      name:'Heels',
      description:'Dança com salto alto, enfatizando postura, confiança e sensualidade.'
    },
    {
      name:'Alongamento',
      description:'Aulas para melhorar flexibilidade, postura e prevenir lesões.'
    },
    {
      name:'Coreografia',
      description:'Aprendizado de sequências coreográficas para aprimorar técnica e expressão.'
    },
    {
      name:'Vogue',
      description:'Estilo inspirado na "Cultura Ballroom", com poses dramáticas e movimentos estilizados.'
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
        'Sala 1', 'Jazz 18h - 19h', 'Hip Hop Iniciante II 19h30 - 20h30 ', 'Coreografia 20h30 - 21h30',
        'Sala 2', 'Vogue 18h - 19h', 'Jazz Infantil 19h - 20h', 'H2 20h30 - 21h30'
      ]
    },
    {
      day: 'Terça',
      classes: [
      'Sala 1', 'Alongamento - 19h30 - 20h30', 'Jazz & Contemporâneo 20h30 - 21h30',
      'Sala 2', 'Jazz Iniciante I - 19h30 - 20h30'
      ]
    },
    {
      day: 'Quinta',
      classes: [
        'Sala 1', 'K-Pop 17h30 - 18h30',
        'Afro 18h30 - 19h30',
        'Dancehall & Coreografia 19h30 - 20h30',
        'Sala 2', 'Konklav Day - Estudio completo de Tatto e Piercing (Precos exclusivos para alunos do Nucleo)'
      ]
    },
    {
      day: 'Sexta',
      classes: [
        'Sala 1', 'Jersey 18h - 19h ',
        'Jazz Funk 19h - 20h',
        'Heels 20h - 21h',
        'MasterClass 21h - 22h',
        'Sala 2', 'Academicas 18h - 19h', 'Ballet Adulto 19h - 20h'
      ]
    },
    {
      day: 'Sábado',
      classes: [
        'Sala 1','Jazz Funk 10h - 11h',
        'Hip Hop Iniciante I 11h - 12h',
        'Sala 2', 'Baby Class 9h - 10h', 'Ballet Infantil 10h - 11h'
      ]
    }
  ];
















}