import { defineStore } from 'pinia';
import { nextTick } from 'vue';

// Definujeme `Product` interface pro produkty.
interface Product {
  id: number; // Jedinečný identifikátor produktu.
  name: string; // Název produktu.
  price: number; // Cena produktu.
  picture: string; // URL obrázku produktu.
}

// Definujeme `CartItem` interface pro položku v košíku, která navíc obsahuje `quantity`.
interface CartItem extends Product {
  quantity: number; // Počet kusů produktu v košíku.
}

// Definujeme store pod názvem `productStore`.
export const useProductStore = defineStore('productStore', {
  // `state` obsahuje počáteční stav (data) pro tento store.
  state: () => ({
    products: [] as Product[], // Pole produktů, definované jako pole objektů typu `Product`.
    cart: [] as CartItem[], // Pole položek v košíku, definované jako pole objektů typu `CartItem`.
    loading: true, // Indikátor, zda probíhá načítání produktů.
  }),

  // `actions` obsahují funkce, které mohou modifikovat stav nebo provádět asynchronní operace.
  actions: {
    // Asynchronní funkce pro načtení produktů ze serveru.
    async loadProducts() {
      try {
        const response = await fetch('data/shop-items.json'); // Načítá data z JSON souboru na zadané URL.
        if (!response.ok) throw new Error('Chyba při načítání produktů'); // Kontrola, zda požadavek proběhl úspěšně.

        this.products = await response.json(); // Při úspěšném načtení uloží produkty do stavu `products`.
        console.log('Produkty načteny:', this.products);

        nextTick(() => {
          // Zajistí, že změny ve stavu `loading` budou provedeny až po aktualizaci DOMu.
          this.loading = false;
        });
      } catch (error) {
        console.error('Chyba při načítání produktů:', error); // Zpracování chyby načítání, vypíše do konzole.
      }
    },

    // Přidá produkt do košíku, nebo zvýší jeho množství, pokud už je v košíku.
    addToCart(product: Product) {
      const itemInCart = this.cart.find(item => item.id === product.id); // Vyhledá produkt podle ID v košíku.

      if (itemInCart) {
        if (itemInCart.quantity < 99) { // Podmínka brání přidání více než 99 kusů jednoho produktu.
          itemInCart.quantity++; // Zvýší množství o 1.
        }
      } else {
        this.cart.push({ ...product, quantity: 1 }); // Přidá nový produkt s množstvím 1, pokud ještě není v košíku.
      }
      console.log('Košík:', this.cart); // Vypíše aktuální stav košíku.
    },

    // Sníží množství produktu v košíku o 1, nebo jej zcela odstraní, pokud je poslední kus.
    removeFromCart(productId: number) {
      const itemIndex = this.cart.findIndex(item => item.id === productId); // Najde index produktu podle jeho ID.

      if (itemIndex !== -1) { // Pokud je produkt nalezen v košíku...
        if (this.cart[itemIndex].quantity > 1) {
          this.cart[itemIndex].quantity--; // Sníží množství produktu o 1.
        } else {
          this.cart.splice(itemIndex, 1); // Odstraní produkt z košíku, pokud je množství pouze 1.
        }
      }
      console.log('Košík po odebrání:', this.cart); // Vypíše aktuální stav košíku po úpravě.
    },

    // Vrátí množství produktu v košíku podle jeho ID.
    getQuantity(productId: number) {
      const item = this.cart.find(item => item.id === productId); // Hledá produkt podle ID v košíku.
      return item ? item.quantity : 0; // Vrátí množství produktu, pokud je nalezen, jinak 0.
    },

    // Vypočítá celkovou cenu všech položek v košíku.
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0); // Spočítá celkovou cenu košíku.
    },

    // Odstraní všechny instance produktu z košíku podle jeho ID.
    clearItemFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.id !== productId); // Odstraní všechny produkty s daným ID z košíku.
      console.log(`Produkt s ID ${productId} byl odstraněn z košíku.`, this.cart); // Vypíše stav po odstranění.
    }
  }
});
