import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = Object.assign([
      {
        title: 'The Madalorian',
        releaseDate: new Date(),
        price: 99.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('11-11-2021'),
        price: 55.55
      },
      {
        title: 'The Madalorian',
        releaseDate: new Date(),
        price: 99.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('11-11-2021'),
        price: 55.55
      },{
        title: 'The Madalorian',
        releaseDate: new Date(),
        price: 99.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('11-11-2021'),
        price: 55.55
      },{
        title: 'The Madalorian',
        releaseDate: new Date(),
        price: 99.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('11-11-2021'),
        price: 55.55
      },{
        title: 'The Madalorian',
        releaseDate: new Date(),
        price: 99.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('11-11-2021'),
        price: 55.55
      }
    ]);

    this.moviesFutureReleases = [];

  }

  moviesInTheaters = [];
  moviesFutureReleases  = [];
  title='any value';
  display = true;

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }


}
