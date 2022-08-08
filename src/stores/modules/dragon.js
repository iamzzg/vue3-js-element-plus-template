import { defineStore } from "pinia";
import piniaStore from "@/stores/index";

export const useDragonStore = defineStore("dragon", {
  state: () => ({}),
  getters: {},
  actions: {}
});
export function useDragonOutsideStore() {
  return useDragonStore(piniaStore);
}
