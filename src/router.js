const questionIndex = r => require.ensure([], () => r(require('views/home/index.vue')), 'questionIndex')
const login = r => require.ensure([], () => r(require('views/home/login.vue')), 'login')
const book = r => require.ensure([], () => r(require('views/home/book.vue')), 'book')
export default [{
    path: '*',
  },
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '首页'
    }
  },
  {
    path:'/questionNaire',
    component: questionIndex,
    meta: {
      title: '母乳喂养调查问卷'
    }
  },
  {
    path:'/login',
    component: login,
    meta: {
      title: '调查问卷登录'
    }
  },
  {
    path:'/aggreenment',
    component: book,
    meta: {
      title: '知情同意书'
    }
  },
   
]
