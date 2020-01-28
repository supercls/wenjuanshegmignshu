const q1 = r => require.ensure([], () => r(require('views/EtMain/index.vue')), 'q1')
const q2 = r => require.ensure([], () => r(require('views/PSQ/q2.vue')), 'q2')
const q3 = r => require.ensure([], () => r(require('views/PSQ/q3.vue')), 'q3')
const q4 = r => require.ensure([], () => r(require('views/PSQ/q4.vue')), 'q4')
const q5 = r => require.ensure([], () => r(require('views/PSQ/q5.vue')), 'q5')
const questionIndex = r => require.ensure([], () => r(require('views/home/index.vue')), 'questionIndex')
const login = r => require.ensure([], () => r(require('views/home/login.vue')), 'login')
const book = r => require.ensure([], () => r(require('views/home/book.vue')), 'book')
const childIndex = r => require.ensure([], () => r(require('views/PSQ/childIndex.vue')), 'childIndex')
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
   {
    path: '/HospitalQ',
    component: q1,
    meta: {
      title: '医疗机构调查表'
    }
  },
  {
    path: '/childIndex',
    component: childIndex,
    meta: {
      title: '儿童家长调查表'
    }
  },
 
  {
    path: '/PregnantQ',
    component: q2,
    meta: {
      title: '孕产妇调查表'
    }
  },
  {
    path: '/Family1',
    component: q3,
    meta: {
      title: '儿童家长调查表（不满1岁）'
    }
  },
  {
    path: '/Family2',
    component: q4,
    meta: {
      title: '儿童家长调查表（满1岁~不满3岁）'
    }
  },
  {
    path: '/Family3',
    component: q5,
    meta: {
      title: '儿童家长调查表（满3岁不满6岁）'
    }
  },
]
