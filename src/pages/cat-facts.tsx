import * as React from 'react';
import { useEffect, useState } from 'react';

import Grid from '../components/grid';
import DataSource from 'devextreme/data/data_source';

export async function getServerData() {
  try {
    const dataResponse = await fetch("https://catfact.ninja/facts", {
      cache: "no-store",
    });

    if (!dataResponse.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: (await dataResponse.json()).data,
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}

const DxDevExtreme: React.FC<{ serverData: any[] }> = ({ serverData }) => {
  const [dataSource, setDataSource] = useState<DataSource>();

  async function prepareDataSource() {
    const facts = serverData;
    const dataSource = new DataSource({
      store: facts,
    });
    await dataSource.load();

    setDataSource(dataSource);
  }

  useEffect(() => {
    prepareDataSource();
  }, []);


  return <Grid data={dataSource?.items() || []}></Grid>;
}

export default DxDevExtreme;
