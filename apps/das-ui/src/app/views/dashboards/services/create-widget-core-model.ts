import { WidgetCoreModel, WidgetCoreOption } from "@das-ui/dashboard-core";
import { FC } from "react";
import { DemoBackComponent } from "../widges/demo-back-component";
import { DemoFrontComponent } from "../widges/demo-front-component";

import { DashHousingPie } from "../widges/houseMarketings/DashHousingPie";
import { DashHousingTable } from "../widges/houseMarketings/DashHousingTable";
import { WidgetTypeEnum } from "../widges/widget-types";

export const createWidgetCoreModels = (widgetCoreStates: WidgetCoreOption[]): WidgetCoreModel[] => {
  const widgetCoreModels: WidgetCoreModel[] = [];

  for (const widgetCoreState of widgetCoreStates) {
    let FrontComponent: FC<any>;
    let BackComponent: FC<any>;

    switch (widgetCoreState.frontComponentType) {
      case WidgetTypeEnum.HousingMarketFront:
        FrontComponent = DashHousingPie;
        break;

      default:
        FrontComponent = DemoFrontComponent;
    }

    switch (widgetCoreState.backComponentType) {
      case WidgetTypeEnum.HousingMarketBack:
        BackComponent = DashHousingTable;
        break;

      default:
        BackComponent = DemoBackComponent;
    }

    widgetCoreModels.push({...widgetCoreState, FrontComponent, BackComponent});
  }

  return widgetCoreModels;

};
