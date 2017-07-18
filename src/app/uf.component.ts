import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './uf.component.html',
  styleUrls: ['./app.component.css']
})
export class DadosDaUFComponent implements OnInit {
    title = 'app';
    id = 27;
    uf: UF;
    anos: Dados[];
    dados_da_samu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorID(this.id);
        this.anos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
    }

}
