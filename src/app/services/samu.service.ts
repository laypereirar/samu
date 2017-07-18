import { Injectable } from '@angular/core';

import { UF } from '../types/uf';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {
  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getMunicipioMedia(id: number): number {
      let uf: UF;
      let soma = 0;
      let qtd = 0;
      for (let entrada of VALORES){
        if(entrada.uf_id === id)
        {
          soma += entrada.valor;
          qtd++;
        }
      }
      return soma/qtd;
    }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Dados[]{
    var total : Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == uf.id) total.push(mun);
    }
    return total;
  }
}
