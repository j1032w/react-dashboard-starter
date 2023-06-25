import {PieChart} from 'devextreme-react';
import {Series} from 'devextreme-react/chart';
import { FC } from "react";
import {data} from './stores/dasHousingMockData';

export const DashHousingPie: FC = () => {

  return (
    <PieChart dataSource={data} palette="Bright" >
      <Series
        argumentField="buildingType"
        valueField="percentage"
      >
      </Series>
    </PieChart>

  );
}
