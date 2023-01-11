import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-works',
  templateUrl: './all-works.component.html',
  styleUrls: ['./all-works.component.scss'],
})
export class AllWorksComponent implements OnInit {
  public showClickMe: boolean[] = [false, false, false, false];

  public skillLinks: string[] = [
    'https://join-kanban.eugen-oswald.de ',
    'https://pollo-loco.eugen-oswald.de ',
    'https://pokedex.eugen-oswald.de',
    'https://ring-of-fire-67434.web.app',
  ];

  public skillGit: string[] = [
    'https://github.com/EugenOswald/Join-Kanban-Project',
    'https://github.com/EugenOswald/Pollp-Loco',
    'https://github.com/EugenOswald/Pokedex',
    'https://github.com/EugenOswald/ringoffire',
  ];

  public skillName: string[] = [
    'Join Kanban',
    'El Pollo Loco',
    'Pokedex',
    'Ring of Fire',
  ];
  public skillSet: string[] = [
    'JavaScript | CSS | HTML',
    'JavaScript | CSS | HTML',
    'JavaScript | CSS | HTML | API |Bootstrap',
    'Angular | TypeScript | HTML | CSS | Firebase',
  ];
  public skillDescription: string[] = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    'Ring of Fire is a party game in which participants must draw cards and perform actions.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
