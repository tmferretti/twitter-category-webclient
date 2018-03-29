/* global Vue, VueRouter, axios */

var HomePage = {
 
  template: "#home-page",
  data: function() {
    return {
      categories: [],
      activeCategory: {},
      tweets: []
    };
  },
  created: function() {
  	axios.get('https://hidden-everglades-54760.herokuapp.com/v1/categories', { crossdomain: true }).then(function(response) {
      this.categories = response.data
      this.activeCategory = this.categories[0]
      // console.log(this.categories);
      for (var i = 0; this.categories[i]; i++) {
        this.tweets.push(this.categories[i].tweets); 
        // for (var i2 = 0; this.categories.tweets[i2]; i2++) {
        //   console.log(this.categories.tweets);
        // };
      };
      this.tweets = Array.prototype.concat.apply([], this.tweets);

      // for (var i = 0; this.tweets[i]; i++) {
      //   this.tweets[i].date_posted = new Date(this.tweets[i].date_posted);
      //   console.log(this.tweets[i].date_posted.getMonth() + " " + this.tweets[i].date_posted.getDay());
      // };
      // console.log(this.tweets)
      this.categories[0].isActive = true;
    }.bind(this));
  },
  methods: {
    // changeActive: function(category, categories, tweets) {
    //   for (var i = 0; categories[i]; i++) {
    //     categories[i].isActive = false;
    //   };
      
    //   this.activeCategory = category;
    //   category.isActive = !category.isActive;

    //   for (var i = 0; tweets[i]; i++) {
    //     // console.log(tweets[i].isActive);
    //     tweets[i].isActive = !tweets[i].isActive;
    //   };
    //   // tweets.isActive = !this.tweets.isActive;
    // }.bind(this)
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
