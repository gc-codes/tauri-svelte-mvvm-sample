class HomePageViewModel {
  title: string = 'Hello World!';
  description: string = 'Welcome to Tauri + Svelte MVVM Sample App.';

  routes: { title: string, route: string }[] = [
    {
      title: 'About Tauri',
      route: '/about-tauri'
    },
    {
      title: 'MVVM Demo',
      route: '/mvvm-demo'
    }  
  ];;
}

export default HomePageViewModel;