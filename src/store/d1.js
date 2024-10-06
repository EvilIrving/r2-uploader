// cloudflareConfigStore.js
import { defineStore } from "pinia";

export const useCloudflareConfigStore = defineStore("cloudflareConfig", {
  state: () => ({
    R2_PARH: "https://pub-9350f14105fb48d49bb0de3e2822bc9e.r2.dev/",
  }),
  getters: {
    R2_URL: (state) => (name) => `${state.R2_PARH}${name}`,
  },
  actions: {
    async queryDatabase(sql, params) {
      try {
        const response = await fetch("/api/cloudflare-proxy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sql, params }),
        });

        if (!response.ok) {
          throw new Error(`Error querying database: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error querying database:", error);
        throw error;
      }
    },
  },
});
