/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://assets.adobedtm.com/launch-EN9808d87e565240b8b540732e616c48dc-staging.min.js"
    />,
  ])
  setPreBodyComponents([
    <script
      key="2"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
    />,
  ])
  setPostBodyComponents([
    <script
      key="3"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.js"
    />,
  ])
}