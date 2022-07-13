import { Component, OnInit, Input } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';

@Component({ 
  selector: 'articolo', 
  templateUrl: 'articolo.component.html', 
  styleUrls: ['articolo.component.css'] 
}) 
export class ArticoloComponent { 
  @Input() art: Articolo; 
  constructor() {} 
} 
