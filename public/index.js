/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      categories: [],
      activeCategory: {}
    };
  },
  created: function() {
  	axios.get('http://localhost:3000/v1/categories', { crossdomain: true }).then(function(response) {
      this.categories = response.data
      this.activeCategory = this.categories[0]
      console.log(this.categories);

    }.bind(this));
  },
  methods: {
    changeActive: function(tab) {
      console.log("changed the tab")
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
