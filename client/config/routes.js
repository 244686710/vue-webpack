import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    name: 'app',
    component: Todo,
    meta: {
      title: 'this is app',
      description: 'adssasd'
    },
    children: [
      {
        path: 'test',
        name: 'test',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
