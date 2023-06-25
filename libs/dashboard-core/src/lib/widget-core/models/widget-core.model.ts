import { FC } from 'react';
import { WidgetCoreLayout } from './widget-core-layout';

export type WidgetCoreModel = WidgetCoreLayout & {
  FrontComponent: FC<any>;
  BackComponent: FC<any>;
};
