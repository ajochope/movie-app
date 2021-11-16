import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters = Object.assign([
      {
        title: 'The Madalorian',
        releaseDate: new Date(),
        price: 99.99,
        poster: 'https://images.unsplash.com/photo-1447433693259-c8549e937d62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0YXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('11-11-2021'),
        price: 55.55,
        poster: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
      }
    ]);

    this.moviesFutureReleases = [];

  }

  moviesInTheaters = [];
  moviesFutureReleases  = [];

}
