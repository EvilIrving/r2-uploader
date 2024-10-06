// cloudflareConfigStore.js
import { defineStore } from "pinia";

export const useCloudflareConfigStore = defineStore("cloudflareConfig", {
  state: () => ({
    // 移除敏感信息
  }),
  actions: {
    async queryDatabase(sql, params) {
      try {
        const response = await axios.post("/api/cloudflare-proxy", {
          sql,
          params,
        });
        return response.data;
      } catch (error) {
        console.error("Error querying database:", error);
        throw error;
      }
    },
  },
});
