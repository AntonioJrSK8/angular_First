import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-line',
  template: `
    <p>
      teste-line works!
    </p>
  `,
  styles: [
    'p { color: green}',
    'p { background-color: black}'
  ]
})
export class TesteLineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
