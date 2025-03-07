import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
}

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as { id: number; name: string; price: number; picture: string }[],
    cart: [] as CartItem[] // Oprava: Explicitně říkáme TypeScriptu, že cart je pole objektů typu CartItem
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

      
    },

    addToCart(product: { id: number; name: string; price: number; picture: string }) {
      const itemInCart = this.cart.find(item => item.id === product.id); // hledá v objektu, jestli nějáký objekt odpovídá product.id, pokud žádný z objektů neodpovídá, vrátí undefined
      if(itemInCart)
      {
        if (itemInCart.quantity < 99)
        { // podmínka zabrání přidání více než 99 kusů
        itemInCart.quantity++; // Zvýší množství, pokud už je produkt v košíku
        }
      } else {
        this.cart.push({ ...product, quantity: 1 }); // pokud není produkt v košíku, pushne ho jako objekt do pole cart s quantity=1
      }
      console.log('Košík:', this.cart);
    },
    removeFromCart(productId: number) {
      const itemIndex = this.cart.findIndex(item => item.id === productId); // findIndex() - vrátí číslo (index) objektu v poli (0,1,2 ...) pokud odpovídá podmínce item.id === productId, jinak vrátí -1
      
      if (itemIndex !== -1) {
        // pokud byl objekt produktu v poli cart nalezen
        if (this.cart[itemIndex].quantity > 1) {
          this.cart[itemIndex].quantity--; // Sníží počet o 1
        } else {
          this.cart.splice(itemIndex, 1); // Pokud je poslední kus, odstraní produkt z košíku
        }
      }
      console.log('Košík po odebrání:', this.cart);
    },

    getQuantity(productId: number)
    {
    // Vrátí počet produktů v košíku podle jejich id
    const item = this.cart.find(item => item.id === productId); // cart.value je pole všech produktů v košíku (protože používám storeToRefs()), .find() projde celé pole a najde první objekt, kde item.id === productId., Pokud takový produkt existuje, vrátí jeho objekt. Pokud neexistuje, vrátí undefined.
    return item ? item.quantity : 0;  // pokud je item (není undefined), vracej item, jinak vracej 0
  },
  totalPrice(){
  return this.cart.reduce((total, item) => total + item.price * item.quantity, 0); // .reduce() projde celé pole cart, sečte ceny produktů a vynásobí je jejich počtem (quantity), 0 je počáteční hodnota (total).
  },
  clearItemFromCart(productId:number){
    // funkce vymaže produkt v košíku bez ohledu na to, kolikrát se v košíku nachází, quantity nerozhoduje
    this.cart = this.cart.filter(item => item.id !== productId); // filter ponechá všechny objekty, které neodpovídají podmínce cart.id !== productId
    console.log(`Produkt s ID ${productId} byl odstraněn z košíku.`, this.cart);
  }
  }
});
