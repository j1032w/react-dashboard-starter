import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import {Responsive, WidthProvider} from 'react-grid-layout';
import styled from 'styled-components/macro';
import {FlexColumnWrapper} from '../../pages/HomePage/components/styled/FlexColumnWrapper';
import {DasWidgetCore} from './DashboardWidgetCore/DasWidgetCore';
import {WidgetCoreModel} from './stores/widgetCoreModel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  .toolbar {
    display: flex;
    flex: 1;
  }
`;

export function DashboardCore({widgetsData = [],}: {
  widgetsData?: WidgetCoreModel[];
}) {
  const layout = [
    {i: '1', x: 0, y: 0, w: 3, h: 10},
    {i: '2', x: 1, y: 0, w: 4, h: 8},
  ];

  const GridItemWrapper = styled(FlexColumnWrapper)`
    background: #f5f5f5;
    border: 1px solid #ccc;
  `;

  const GridItemContent = styled(FlexColumnWrapper)`

  `;

  const Wrapper = styled.div`
    padding: 0.2rem;
  `;

  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <Wrapper>
      <ResponsiveGridLayout
        layouts={{lg: layout}}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 6, sm: 3, xs: 2, xxs: 1}}
        rowHeight={30}
        width={1200}
        className="layout"
      >
        {widgetsData.map(widgetModel => {
          return (
            <GridItemWrapper key={widgetModel.id}>
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
