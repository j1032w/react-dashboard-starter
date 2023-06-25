import { FC } from 'react';
import { WidgetCoreOption } from './widget-core-option';

export type WidgetCoreModel = WidgetCoreOption & {
  FrontComponent: FC<any>;
  BackComponent: FC<any>;
  remove?: () => void;
  flip?: () => void;
};
