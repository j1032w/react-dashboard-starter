import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import {Responsive, WidthProvider} from 'react-grid-layout';
import styled from 'styled-components/macro';
import {FlexColumnWrapper} from '../../pages/HomePage/components/styled/FlexColumnWrapper';
import {DasWidgetCore} from './DashboardWidgetCore/DasWidgetCore';
import {WidgetCoreModel} from './stores/widgetCoreModel';



const GridItemWrapper = styled(FlexColumnWrapper)`
    background: #f5f5f5;
    border: 1px solid #ccc;
  `;

const GridItemContent = styled(FlexColumnWrapper)`

  `;

const Wrapper = styled.div`
  padding: 0.2rem;
`;




export function DashboardCore({widgetsData = [], onLayoutChange}: {
  widgetsData?: any[],
  onLayoutChange?: (layouts) => void
}) {

  const ResponsiveGridLayout = WidthProvider(Responsive);




  return (
    <Wrapper>
      <ResponsiveGridLayout
        layouts={{lg: widgetsData}}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 6, sm: 3, xs: 2, xxs: 1}}
        rowHeight={30}
        width={1200}
        className="layout"
        draggableHandle=".widget-header"
        onLayoutChange={onLayoutChange}
      >
        {widgetsData.map(widgetModel => {
          return (
            <GridItemWrapper key={widgetModel.i}>
              <GridItemContent>
                <DasWidgetCore widgetData={widgetModel}></DasWidgetCore>
              </GridItemContent>
            </GridItemWrapper>
          );
        })}
      </ResponsiveGridLayout>
    </Wrapper>
  );
}

const StyledButton = styled.button`
  font-size: 2.5rem;
  color: white;
  background-color: #101010;
  padding: 20px 40px;
  margin: 0 auto;
`;

// Inherit styles from StyledButton in StyledSmallButton

const StyledSmallButton = styled(StyledButton)`
  font-size: 1.25rem;
`;
