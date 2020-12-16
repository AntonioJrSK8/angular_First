import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alerta-sucesso',
  template: `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <ng-content></ng-content>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`
})

export class AlertaSucessoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
