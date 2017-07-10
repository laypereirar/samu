import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getoMunicipiosAtendidosDoEstado(uf_id: number): Dados[] {
    var uf_atendidos: Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == uf_id) uf_atendidos.push(mun);
    }
    return uf_atendidos;
  }
}
