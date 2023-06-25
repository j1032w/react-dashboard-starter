import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';

import * as React from 'react';
import { FC } from 'react';
import { data } from './stores/dasHousingMockData';

export const DashHousingTable: FC = () => {
  return (
    <DataGrid
      dataSource={data}
      allowColumnReordering={true}
      rowAlternationEnabled={true}
      showBorders={true}
    >
      <Column
        dataField="buildingType"
        caption="Building Type"
        dataType="string"
      />
      <Column
        dataField="total"
        caption="Total"
        dataType="number"
        format="integer"
      />
      <Column
        dataField="percentage"
        caption="Percentage"
        dataType="number"
        format="percent"
      />

    </DataGrid>
  );
};
