import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import Breadcrumbs from "./components/bread_crumbs";
import { store } from "./store";
import Vue2Filters from "vue2-filters";
import VueSweetalert2 from "vue-sweetalert2";
import VueFormWizard from "vue-form-wizard";
import VueTour from "vue-tour";
import Notifications from "vue-notification";
import { Vue2Dragula } from "vue2-dragula";
import Toasted from "vue-toasted";
import SmartTable from "vuejs-smart-table";
import * as VueGoogleMaps from "vue2-google-maps";
import { VueMasonryPlugin } from "vue-masonry";
import VueFeather from "vue-feather";
import VueApexCharts from "vue-apexcharts";
import FunctionalCalendar from "vue-functional-calendar";
import vueKanban from "vue-kanban";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//build components
import DataTable from "./components/datatable.vue";
import card from "@/components/cardlist.vue";
import FormList from "@/components/form_list.vue";
import FormSoal from "@/components/form_soal.vue";
import FormExcel from "@/components/form_soal_excel.vue";

// Multi Language Add
import en from "./locales/en.json";
import es from "./locales/es.json";
import { defaultLocale, localeOptions } from "./constants/config";
import VueI18n from "vue-i18n";

// Import Theme scss
import "./assets/scss/app.scss";

import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
// config for firebase
import config from "./config.json";

//
import PxCard from "./components/Pxcard.vue";
Vue.component(PxCard.name, PxCard);

import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;

Vue.component("data-table", DataTable);
Vue.component("card-list", card);
Vue.component("form-list", FormList);
Vue.component("form-soal", FormSoal);
Vue.component("form-soal-excel", FormExcel);
Vue.component("Breadcrumbs", Breadcrumbs);
Vue.component("apexchart", VueApexCharts);

Vue.use(VueFeather);

Vue.use(Toasted, {
  iconPack: "fontawesome"
});
Vue.use(Vue2Dragula);

Vue.use(VueGoogleMaps, {
  load: {
    key: "API_KEY",
    libraries: "places"
  }
});

Vue.use(Notifications);
Vue.use(Vue2Filters);
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard);
Vue.use(VueTour);
Vue.use(BootstrapVue);
Vue.use(SmartTable);
Vue.use(require("vue-chartist"));
Vue.use(require("vue-moment"));
Vue.use(VueMasonryPlugin);
Vue.use(FunctionalCalendar, {
  dayNames: ["M", "T", "W", "T", "F", "S", "S"]
});
Vue.use(vueKanban);
Vue.use(VueI18n);

const messages = { en: en, es: es };
const locale =
  localStorage.getItem("currentLanguage") &&
  localeOptions.filter(x => x.id === localStorage.getItem("currentLanguage"))
    .length > 0
    ? localStorage.getItem("currentLanguage")
    : defaultLocale;
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: "en",
  messages
});

Vue.config.productionTip = false;
firebase.initializeApp(config.firebase);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
