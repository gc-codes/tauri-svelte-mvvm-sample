const title = 'Hello World!';
const description = 'Welcome to Tauri + Svelte MVVM Sample App.';

const routes = [
  {
    title: 'About Tauri',
    route: '/about-tauri'
  },
  {
    title: 'MVVM Demo',
    route: '/mvvm-demo'
  }
];

export const HomePageViewModel = {
  title,
  description,
  routes,
};