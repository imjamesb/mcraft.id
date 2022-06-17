/** @jsx h */

// Imports
import Layout from "../layout/Standard.tsx";
import { h, jsx } from "../ssr.ts";

export default jsx(
  <Layout title="Temporary Landing Page">
    <h1 class="text-2xl">Hello world</h1>
  </Layout>,
);
