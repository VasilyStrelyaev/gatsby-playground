import * as React from 'react';
import DxDevExtreme from '../components/dxdevextreme';

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

const CatFacts: React.FC<{ serverData: any[] }> = ({ serverData }) => {
  return <DxDevExtreme serverData={serverData}/>;
  // return <></>;
}

export default CatFacts;
