import { render, screen } from "@testing-library/react";
import DashboardCore, { DashboardCoreModel } from "./index";
import { WidgetCoreLayouts } from "./widget-core/models/widget-core.model";


describe("DashboardCore", () => {




  it("should render successfully", () => {
    const dashboardCoreProp: DashboardCoreProp = {
      widgetCoreProps: [] as WidgetCoreLayouts[],
      onLayoutChange: (newLayouts: WidgetCoreLayouts[]) => {
      }
    };


    render(<DashboardCore {...dashboardCoreProp} />);

    expect(screen.queryAllByLabelText('test')).toBeTruthy();
  });
});
