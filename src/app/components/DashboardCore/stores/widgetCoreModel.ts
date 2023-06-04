import {ComponentType} from 'react';

export interface WidgetCoreModel {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  name: string;
  isShownFront: boolean;
  FrontComponent?: ComponentType<any>;
  BackComponent?: ComponentType<any>;
}
