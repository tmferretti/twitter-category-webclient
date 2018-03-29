/* global Vue, VueRouter, axios */

var HomePage = {
 
  template: "#home-page",
  data: function() {
    return {
      categories: [],
      tweets: []
    };
  },
  created: function() {
  	axios.get('https://hidden-everglades-54760.herokuapp.com/v1/categories', { crossdomain: true }).then(function(response) {
      this.categories = response.data
      this.activeCategory = this.categories[0]
      // console.log(this.categories)
      for (var i = 0; this.categories[i]; i++) {
        this.tweets.push(this.categories[i].tweets); 
      };

      this.tweets = Array.prototype.concat.apply([], this.tweets);
      this.categories[0].isActive = true;
    }.bind(this));
  },
  methods: {
    changeActive: function(category, categories, tweets) {
    //   
      console.log(category)

      for (var i = 0; tweets[i]; i++) {
        tweets[i].isActive = false;
      };

      for (var i = 0; category.tweets[i]; i++) {
        // console.log(category.tweets[i].isActive)
        if (category.tweets[i].isActive != true) {
          // console.log(category.tweets[i].isActive);    
          category.tweets[i].isActive = true;
        };
      };

      if (category.isActive != true) {
        console.log("category.isActive is not true")

        // for (var i = 0; categories[i]; i++) {
        //   categories[i].isActive = false;
        // };

        // category.isActive = !category.isActive;

        // for (var i = 0; category.tweets[i]; i++) {
          // category.tweets[i].isActive = !category.tweets[i].isActive;
        // };
        
      
      };
    }.bind(this)
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ 
    path: "/", component: HomePage 
  }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
