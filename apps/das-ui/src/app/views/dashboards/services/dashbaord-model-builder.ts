import { WidgetCoreLayout, WidgetCoreModel } from "@das-ui/dashboard-core";
import { FC } from "react";
import { DemoBackComponent } from "../widges/DemoBackComponent";
import { DemoFrontComponent } from "../widges/DemoFrontComponent";
import { DasHousingWidgetPie } from "../widges/houseMarketings/DasHousingWidgetPie";
import { WidgetTypeEnum } from "../widges/widget-types";

export const buildWidgetCoreModels = (widgetCoreLayouts: WidgetCoreLayout[]): WidgetCoreModel[] => {
  const widgetCoreModels: WidgetCoreModel[] = [];

  for (const widgetCoreLayout of widgetCoreLayouts) {
    let FrontComponent: FC<any>;
    let BackComponent: FC<any>;

    switch (widgetCoreLayout.frontComponentType) {
      case WidgetTypeEnum.HousingMarketFront:
        FrontComponent = DasHousingWidgetPie;
        break;

      default:
        FrontComponent = DemoFrontComponent;
    }

    switch (widgetCoreLayout.backComponentType) {
      default:
        BackComponent = DemoBackComponent;
    }

    widgetCoreModels.push({...widgetCoreLayout, FrontComponent, BackComponent});
  }

  return widgetCoreModels;

};
