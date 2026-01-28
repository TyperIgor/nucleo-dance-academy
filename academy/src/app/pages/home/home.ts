import { Component } from '@angular/core';
import { Landing } from '../../components/landing/landing';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [Header,Landing],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
