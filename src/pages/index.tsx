import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import DataGrid, {
  Column,
  Pager,
  Paging,
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

const DemoGrid: React.FC = () => {
  return (
    <>
      <DataGrid
        dataSource={dataSourceOptions}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
      >
        <Column dataField="Product" />
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Main Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <DemoGrid/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/23.1.3/css/dx.light.css" />
      <title>Home Page</title>
    </>
  )
};
