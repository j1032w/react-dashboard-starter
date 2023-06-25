import {WidgetCoreLayout} from './widget-core-layout';


export type WidgetCoreOption = WidgetCoreLayout & {
  name: string;
  isFrontVisible: boolean;
  frontComponentType?: string;
  backComponentType?: string;
};


