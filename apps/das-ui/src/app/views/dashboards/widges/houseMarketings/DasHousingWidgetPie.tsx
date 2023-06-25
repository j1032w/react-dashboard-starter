import {PieChart} from 'devextreme-react';
import {Series} from 'devextreme-react/chart';
import {data} from './stores/dasHousingMockData';

export const DasHousingWidgetPie = () => {

  return (
    <PieChart dataSource={data} palette="Bright" size={{height:300, width: 400}}>
      <Series
        argumentField="buildingType"
        valueField="percentage"
      >
      </Series>
    </PieChart>

  );
}
