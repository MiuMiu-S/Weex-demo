// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'


import Home from './views/home.vue'
import Classify from './views/classify.vue'
import Cart from './views/cart.vue'
import Mine from './views/mine.vue'
import Detail from './views/detail.vue'
import Test from './views/test.vue'
Vue.use(Router)

// // Story view factory
// function createStoriesView (type) {
//   return {
//     name: `${type}-stories-view`,
//     render (createElement) {
//       return createElement(StoriesView, { props: { type }})
//     }
//   }
// }

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/top', component: Home },
    { path: '/new', component: Classify },
    { path: '/show', component: Cart },
    { path: '/ask', component: Mine },
    { path: '/test/:id',name:'test',component: Test },
    { path: '/detail/:id',name:'detail',component: Detail },
    { path: '/article/:url(.*)?', component: ArticleView },
    { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/top' }
  ]
})
