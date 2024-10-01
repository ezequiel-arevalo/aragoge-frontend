const routes = [
    {
      path: '/home',
      name: 'Home',
      component: 'HomePage',
      isAuth: false,
    },
    {
      path: '/marketplace',
      name: 'Marketplace',
      component: 'MarketPage',
      isAuth: false,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: 'ContactPage',
      isAuth: false,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: 'ProfilePage',
      isAuth: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: 'LoginPage',
      isAuth: false,
    },
    {
      path: '/register',
      name: 'Register',
      component: 'RegisterPage',
      isAuth: false,
    },
    {
      path: '/professionals',
      name: 'Professionals',
      component: 'HomePagePro',
      isAuth: true,
      role: 3,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: 'HomeAdminPage',
      isAuth: true,
      role: 1,
    },
    {
      path: '*',
      component: 'ErrorPage',
    }
  ];
  
  export default routes;