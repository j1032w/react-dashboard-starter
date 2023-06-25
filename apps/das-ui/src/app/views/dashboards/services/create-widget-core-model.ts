import { WidgetCoreOption, WidgetCoreLayouts } from "@das-ui/dashboard-core";
import { FC } from "react";
import { DemoBackComponent } from "../widges/DemoBackComponent";
import { DemoFrontComponent } from "../widges/DemoFrontComponent";
import { DasHousingWidgetPie } from "../widges/houseMarketings/DasHousingWidgetPie";
import { WidgetTypeEnum } from "../widges/widget-types";

export const createWidgetCoreModels = (widgetCoreStates: WidgetCoreOption[]): WidgetCoreLayouts[] => {
  const widgetCoreModels: WidgetCoreLayouts[] = [];

  for (const widgetCoreState of widgetCoreStates) {
    let FrontComponent: FC<any>;
    let BackComponent: FC<any>;

    switch (widgetCoreState.frontComponentType) {
      case WidgetTypeEnum.HousingMarketFront:
        FrontComponent = DasHousingWidgetPie;
        break;

      default:
        FrontComponent = DemoFrontComponent;
    }

    switch (widgetCoreState.backComponentType) {
      default:
        BackComponent = DemoBackComponent;
    }

    widgetCoreModels.push({...widgetCoreState, FrontComponent, BackComponent});
  }

  return widgetCoreModels;

};
