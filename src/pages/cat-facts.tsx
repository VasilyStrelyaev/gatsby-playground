import * as React from 'react';
import { useEffect, useState } from 'react';

import Grid from '../components/grid';
import DataSource from 'devextreme/data/data_source';

const getCatFacts = async (): Promise<any[]> => {
  const dataResponce = await fetch("https://catfact.ninja/facts", {
    cache: "no-store",
  });
  const facts = (await dataResponce.json()).data;

  return facts;
};

const DxDevExtreme: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataSource>();

  async function prepareDataSource() {
    const facts = await getCatFacts();
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
