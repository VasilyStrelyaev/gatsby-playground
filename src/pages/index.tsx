import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import ServerRenderableComponent from "../components/static-component";
import DemoGrid from "../components/demo-grid";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <ServerRenderableComponent/>
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
