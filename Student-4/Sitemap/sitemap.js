// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Object containing the IDs of sitemap nodes and their corresponding URLs
    const links = {
      homeLink: "../../Student-1/Splashscreen/Splash.html",
      contentPageLink: "../../Student-2/HomePage/homepage.html",
      buyProductsLink: "../../Student-1/Shop_Cart/Pages/shop.html",
      UserLink: "../../Student-3/pages/userprofile.html",
      feedbacklink: "../../Student-2/Feedback/feedbackc.html",
      aboutUsLink: "../../Student-3/pages/team.html",
      sitemapLink: "../Sitemap/sitemap.html",
      galleryLink: "../GalleryPage/Gallery.html"
    };
   // Iterate over each key-value pair in the links object
    Object.keys(links).forEach(id => {
       // Get the element with the current ID
      const element = document.getElementById(id);
      if (element) {
         // Add a click event listener to the element
        element.addEventListener("click", function() {
          // Redirect to the corresponding URL when the element is clicked
          document.location.href = links[id];
        });
      } else {
         // Log an error if the element with the current ID is not found
        console.error(`Element with ID ${id} not found`);
      }
    });
});
