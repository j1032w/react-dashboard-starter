import { ComponentType } from 'react';

export interface WidgetCoreModel {
  id: number;
  name: string;
  isShownFront: boolean;
  FrontComponent?: ComponentType<any>;
  BackComponent?: ComponentType<any>;
}
