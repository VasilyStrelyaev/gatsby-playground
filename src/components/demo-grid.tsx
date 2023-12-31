import * as React from "react";

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';

import ODataStore from 'devextreme/data/odata/store';

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
  store: new ODataStore({
    url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
    key: 'Id',
    beforeSend(request) {
      const year = new Date().getFullYear() - 1;
      request.params.startDate = `${year}-05-10`;
      request.params.endDate = `${year}-5-15`;
    },
  }),
};

function DemoGrid() {
  return (
    <>
      <p>Will this be rendered on the server?</p>
      <DataGrid
      dataSource={dataSourceOptions}
      allowColumnReordering={true}
      rowAlternationEnabled={true}
      showBorders={true}
    >
      <GroupPanel visible={true} />
      <SearchPanel visible={true} highlightCaseSensitive={true} />
      <Grouping autoExpandAll={false} />

      <Column dataField="Product" groupIndex={0} />
      <Column
        dataField="Amount"
        caption="Sale Amount"
        dataType="number"
        format="currency"
        alignment="right"
      />
      <Column
        dataField="Discount"
        caption="Discount %"
        dataType="number"
        format="percent"
        alignment="right"
        allowGrouping={false}
        cssClass="bullet"
      />
      <Column dataField="SaleDate" dataType="date" />
      <Column dataField="Region" dataType="string" />
      <Column dataField="Sector" dataType="string" />
      <Column dataField="Channel" dataType="string" />
      <Column dataField="Customer" dataType="string" width={150} />

      <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
      <Paging defaultPageSize={10} />
    </DataGrid>
  </>
  );
}

export default DemoGrid;
