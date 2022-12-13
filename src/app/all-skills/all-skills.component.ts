import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-skills',
  templateUrl: './all-skills.component.html',
  styleUrls: ['./all-skills.component.scss'],
})
export class AllSkillsComponent implements OnInit {
  public skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Scrum',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Material design',
  ];

  constructor() {}

  ngOnInit(): void {}
}
