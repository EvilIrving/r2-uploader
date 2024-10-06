// cloudflareConfigStore.js
import { defineStore } from "pinia";

export const useCloudflareConfigStore = defineStore("cloudflareConfig", {
  state: () => ({
    API_TOKEN: "YOUR_API_TOKEN",
    ACCOUNT_ID: "747065b1adc6a0ad30cfc001dde4d491",
    DATABASE_ID: "ae855eb0-5830-4bbe-b245-fae44f560140",
    R2_PARH: "https://pub-9350f14105fb48d49bb0de3e2822bc9e.r2.dev/",
  }),
  getters: {
    R2_URL: (state) => (name) => `${state.R2_PARH}${name}`,
    API_BASE_URL: (state) =>
      `https://api.cloudflare.com/client/v4/accounts/${state.ACCOUNT_ID}/d1/database/${state.DATABASE_ID}`,
  },

  actions: {
    setAPIToken(token) {
      this.API_TOKEN = token;
    },
    setAccountID(id) {
      this.ACCOUNT_ID = id;
    },
    setDatabaseID(id) {
      this.DATABASE_ID = id;
    },
  },
});
