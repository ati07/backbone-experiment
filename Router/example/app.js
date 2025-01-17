// Define the App Router
var AppRouter = Backbone.Router.extend({
    routes: {
      'home': 'showHome',       // Matches /home
      'about': 'showAbout',     // Matches /about
      'contact': 'showContact', // Matches /contact
      '*path': 'defaultRoute'   // Matches anything else (404 fallback)
    },
  
    // Route Handlers
    showHome: function() {
      $('.content').html('<h1>Welcome to the Home Page</h1><p>This is the home page content.</p>');
    },
  
    showAbout: function() {
      $('.content').html('<h1>About Us</h1><p>Learn more about our company here.</p>');
    },
  
    showContact: function() {
      $('.content').html('<h1>Contact Us</h1><p>Feel free to reach out to us anytime.</p>');
    },
  
    defaultRoute: function(path) {
      $('.content').html(`<h1>404 Not Found</h1><p>The page "${path}" does not exist.</p>`);
    }
  });
  
  // Initialize the Router
  var appRouter = new AppRouter();
  
  // Start Backbone History
  Backbone.history.start({
    pushState: true, // Use HTML5 pushState for clean URLs
    root: '/'        // Ensure the app runs from the root of the domain
  });
  
  // Prevent Default Anchor Click Behavior
  $(document).on('click', 'a.navigate', function(e) {
    e.preventDefault(); // Prevent default navigation
    var href = $(this).attr('href'); // Get the href attribute
    appRouter.navigate(href, { trigger: true }); // Trigger the route handler
  });
  