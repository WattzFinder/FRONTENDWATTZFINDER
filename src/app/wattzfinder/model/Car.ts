export interface  Car {
  id: number;
  Car: string;
  // Status: string;
  // Mode: string;
  empresa_fabricadora:string;
  modelo: string;
  ano_Fabricacion: string; //(--- , ----)
  tipo: string;     // vehiculo hibrido (hev) , hibrido enchufable ,(PHEV )  y vehiculo de bateria  ,(BEV)
  autonomia: number;    //que ditancia puede recorrer el vehiculo
  descuento:number;
  precionfinal:number;
  img_car:string;

  //
  // "Storage Type": string;
  // GPU: string;
  // Screen: number;
  // Touch: string;
  // "Final Price": number;
}
