import { defineStore } from "pinia"; // inicializar el stroe

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
let initialBookForm = { title: "", author: "", pages: 0, isRead: false };

export const useBookStore = defineStore("books", {
  // id del store
  // todos los stores empiezan con use
  state: () => ({
    // state es donde se almacenan las variables reactivas. esta state, action, getters
    bookForm: { ...initialBookForm },
    books: [],
    formDialog: false,
  }),
  actions: {
    addBook() {
      this.books.push(this.bookForm);
      this.formDialog = false;
      this.bookForm = { ...initialBookForm };
    },
  },
});
// esta definido aca en vez de en el componente en si. asi pueden acceder los differentes componentes
