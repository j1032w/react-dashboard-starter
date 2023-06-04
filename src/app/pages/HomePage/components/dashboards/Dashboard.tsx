import {DonutLarge} from '@mui/icons-material';
import {Fab} from '@mui/material';
import {DashboardCore} from 'app/components/DashboardCore/DashboardCore';
import styled from 'styled-components/macro';


import {FlexColumnWrapper} from '../styled/FlexColumnWrapper';
import {DasDemoWidgetBack} from './DasDemoWidgetBack';
import {DasDemoWidgetFront} from './DasDemoWidgetFront';

const Wrapper = styled(FlexColumnWrapper)``;

const Toolbar = styled(FlexColumnWrapper)`
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
`;

const initialData = {
  widgetModels: [
    {
      i: '1',
      x: 0, y: 0, w: 3, h: 10,
      name: 'Widget A',
      isShownFront: true,
      FrontComponent: ({name}) => <DasDemoWidgetFront name={name}/>,
      BackComponent: ({name}) => <DasDemoWidgetBack name={name}/>,
    },
    {
      i: '2',
      x: 3, y: 0, w: 4, h: 8,
      name: 'Widget B',
      isShownFront: false,
      FrontComponent: ({name}) => <DasDemoWidgetFront name={name}/>,
      BackComponent: ({name}) => <DasDemoWidgetBack name={name}/>,
    },
    {
      i: '3',
      x: 7, y: 0, w: 4, h: 8,
      name: 'Widget C',
      isShownFront: false,
      FrontComponent: ({name}) => <DasDemoWidgetFront name={name}/>,
      BackComponent: ({name}) => <DasDemoWidgetBack name={name}/>,
    },
    {
      i: '4',
      x: 0, y: 10, w: 4, h: 8,
      name: 'Widget D',
      isShownFront: false,
      FrontComponent: ({name}) => <DasDemoWidgetFront name={name}/>,
      BackComponent: ({name}) => <DasDemoWidgetBack name={name}/>,
    },
  ],
};

let layouts = [];

const onLayoutChange = (newLayouts) => {
  layouts = newLayouts;
};


const getWidgetModel = (i) => {
  console.log(layouts);
}

export function Dashboard() {
  return (
    <FlexColumnWrapper>
      <Toolbar>
        <Fab variant="extended" onClick={getWidgetModel}>
          <DonutLarge/>
          Reset
        </Fab>
      </Toolbar>

      <FlexColumnWrapper>
        <DashboardCore widgetsData={initialData.widgetModels} onLayoutChange={onLayoutChange}></DashboardCore>
      </FlexColumnWrapper>
    </FlexColumnWrapper>
  );
}
