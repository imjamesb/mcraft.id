/** @jsx h */

// Imports
import { h, type JSX } from "../ssr.ts";

export default (
  { children, title }: {
    children?: JSX.Element | JSX.Element[];
    title?: string;
  },
) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {title ? <title>{title}</title> : undefined}
      <link
        rel="stylesheet"
        href="https://rsms.me/inter/inter.css"
      />
    </head>
    <body class="p-2 bg-[#F9F9F9] text-[#191919]">
      {children}
    </body>
  </html>
);
