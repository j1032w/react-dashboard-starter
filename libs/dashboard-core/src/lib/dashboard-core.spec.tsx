import { render, screen } from "@testing-library/react";
import DashboardCore, { DashboardCoreModel } from "./index";
import { WidgetCoreModel } from "./widget-core/models/widget-core.model";


describe("DashboardCore", () => {




  it("should render successfully", () => {
    const dashboardCoreProp: DashboardCoreProp = {
      widgetCoreProps: [] as WidgetCoreModel[],
      onLayoutChange: (newLayouts: WidgetCoreModel[]) => {
      }
    };


    render(<DashboardCore {...dashboardCoreProp} />);

    expect(screen.queryAllByLabelText('test')).toBeTruthy();
  });
});
