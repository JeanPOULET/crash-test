export enum PriceStatusEnum {
  NEW = 'NEW',
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
  CANCELLED = 'CANCELLED'

}


export interface Valuable {
  id?: string;
  lastPrice?: Price;
  status?: string;
  statusDate?: Date;
  modifiedBy?: string;
  lastUpdateDate?: string;

}

export interface Price {
  id?: string;
  prevailingFob?: number; //when product
  prevailingCif?: number; //only product
  minimumFob?: number;
  minimumCif?: number; //only product
  status?: PriceStatusEnum;
  lastUpdatedDate?: Date;
  validFrom?: Date;
  validTo?: Date;
  exchangeRateLocal?: number;
  exchangeRateUsd?: number;
  type?: string;
  modifiedBy?: string
  currency?: string;
}

export interface Product extends Valuable {
  hsCode: string;
  hsCodeVersion?: string;
  dgdTags: ProductDgdTag[];
  commercialUnit: string;
  origin: string;
  productReference?: ProductReference;
  importRegimeCode?: string[];
  hsVersion?: string;
}

export interface ProductReference {
  id?: string;
  category?: string;
  status?: string;
}

export interface ProductDgdTag {
  id?: string;
  dgdTagCode?: string;
  value?: string;
  translateKeyValue?: string
}
