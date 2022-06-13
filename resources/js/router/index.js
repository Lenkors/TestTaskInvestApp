import {
    createRouter,
    createWebHistory,
  } from "vue-router";
  
  const routes = [
    {
      path: "/",
      alias: '/stocks',
      name: "Home page",
      component: () => import(/* webpackChunkName: "stocks" */ '../pages/Main'),
    },
    {
      path: "/stock/create",
      name: 'Stock create',
      component: () => import(/* webpackChunkName: "stocks_create" */ '../pages/createStock')
    },

    {
      path: '/clients',
      name: 'Clients page',
      component: () => import(/* webpackChunkName: "clients" */ '../pages/Clients')
    },

    {
      path: '/stock/buy',
      name: 'Buy stock',
      component: () => import(/* webpackChunkName: "buy_stock" */ '../pages/buyStock')
    },

    {
      path: '/client/create',
      name: 'Client create',
      component: () => import(/* webpackChunkName: "clients_create" */ '../pages/createClient')
    },

    {
      path: '/user-stocks/:id',
      name: 'User stocks',
      component: () => import(/* webpackChunkName: "user_stocks" */ '../pages/userStocks')
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;