// Imports
import { h, type JSX, render } from "./deps/preact.ts";
import { consume, setup, stringify } from "./deps/twind.ts";
import config from "./twind.config.ts";

const tw = setup(config);

/**
 * Render a JSX element.
 * @param element The element to render.
 * @param init The response init options.
 */
function jsx(element: JSX.Element, init?: ResponseInit) {
  let str = consume("<!DOCTYPE html>" + render(element), tw).replace(
    "</head>",
    `<style data-twind>${stringify(tw.target)}</style></head>`,
  );
  const response = new Response(str, init);
  response.headers.set("content-type", "text/html");
  return response;
}

export { h, type JSX, jsx, tw, tw as default };
