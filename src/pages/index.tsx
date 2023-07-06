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

export const Head: HeadFC = () => <title>Home Page</title>
