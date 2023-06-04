import {DonutLarge} from '@mui/icons-material';
import {Fab} from '@mui/material';
import { DashboardCore } from 'app/components/DashboardCore/DashboardCore';
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
      id: 1,
      name: 'A',
      isShownFront: true,
      FrontComponent: ({name}) => <DasDemoWidgetFront name={name}/>,
      BackComponent: ({name}) => <DasDemoWidgetBack name={name}/>,
    },
    {
      id: 2,
      name: 'B',
      isShownFront: false,
      FrontComponent: ({name}) => <DasDemoWidgetFront name={name}/>,
      BackComponent: ({name}) => <DasDemoWidgetBack name={name}/>,
    },
  ],
};

export function Dashboard() {
  return (
    <FlexColumnWrapper>
      <Toolbar>
        <Fab variant="extended">
          <DonutLarge/>
          Reset
        </Fab>
      </Toolbar>

      <FlexColumnWrapper>
        <DashboardCore widgetsData={initialData.widgetModels}></DashboardCore>
      </FlexColumnWrapper>
    </FlexColumnWrapper>
  );
}
