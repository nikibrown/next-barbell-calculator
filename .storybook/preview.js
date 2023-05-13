import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../styles.scss"

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
}

export default preview
