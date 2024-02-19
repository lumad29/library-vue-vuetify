/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#497174cd",
  },
};

// set prop defaults to all VBtn components
const defaults = {
  VBtn: {
    color: "primary",
    class: "rounded-xl",
    size: "large",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // add defaults
  defaults,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
