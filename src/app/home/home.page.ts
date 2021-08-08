import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemNombre : 'Cursos',
    itemFecha : '05-08-2021',
    itemPrioridad : 'elevado',
    itemCategoria : 'trabajo'
  },
  {
    itemNombre : 'Tarea1',
    itemFecha : '10-08-2021',
    itemPrioridad : 'bajo',
    itemCategoria : 'practicas'
  },
  {
    itemNombre : 'Examen',
    itemFecha : '15-08-2021',
    itemPrioridad : 'medio',
    itemCategoria : 'escuela'
  },
]

  today : number = Date.now()

  constructor() {}

}