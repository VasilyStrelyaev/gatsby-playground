import * as React from 'react';
import DxDevExtreme from '../components/dxdevextreme';
import { HeadFC } from 'gatsby';

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
  return (
    <>
      <p>Some cat facts for your consideration:</p>
      <DxDevExtreme serverData={serverData}/>
    </>
  );
  // return <></>;
}

export default CatFacts;

export const Head: HeadFC = () => {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/23.1.3/css/dx.light.css" />
    </>
  )
};
