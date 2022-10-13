// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class SaludoController {
  constructor() {}
  //Metodo y Ruta del Servicio URL
  @get('/saludar')
  saludar(): string{
    return 'Hola desde el servicio de saludar GET/Loopback';
  }

}
