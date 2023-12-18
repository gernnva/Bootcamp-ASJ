import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/service/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{
  
  datos: any = []

  constructor(public myService: PersonajesService){}

  ngOnInit(): void {
      this.myService.getDataAPI().subscribe((data) => {
        console.log(data);
        this.datos = data;
      });
      
  }

}
