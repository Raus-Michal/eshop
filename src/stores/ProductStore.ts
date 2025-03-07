import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    cart: []
  }),
  actions: {
    async loadProducts() {
      try {
        const response = await fetch('/data/shop-items.json');
        if (!response.ok) throw new Error('Chyba při načítání produktů');

        this.products = await response.json();
        console.log('Produkty načteny:', this.products);
      } catch (error) {
        console.error('Chyba při načítání produktů:', error);
      }
    }
  }
});
