# Final Project eventsy

## Info

Dynamic Single Page App (SPA) with Hash Routing - MVC Pattern + SCSS

## Features

- Dynamic page loading using jQuery `$.get()`
- Hash-based routing (e.g., `#home`, `#about`, `#contact`)
- MVC structure for better code separation
- Automatic nav color changes depending on the page
- Simple fallback for missing or failed pages
- SCSS

---

### Project Structure

final-project/
index.html – Main entry point

package.json – Project dependencies and metadata

README.md – Project description and documentation

app/
app.js – Controller: handles routing and nav logic

model.js – Model: loads page content dynamically

css/
styles.css – Compiled CSS from SCSS

scss/
(Your SCSS source files go here — assumed styles.scss)

images/
(All image assets used in the project)

lib/
(Any external libraries you’ve added manually)

pages/ – All dynamic content pages
Static pages:

about.html, contact.html, home.html, gallery.html

Blog pages:

blog.html, blogOne.html, blogTwo.html, blogThree.html, blogFour.html, blogFive.html

Gallery pages:

galleryOne.html, galleryTwo.html, galleryThree.html, galleryFour.html, galleryFive.html

(Each page is loaded dynamically based on the #hash route)

### LINK WEB4

[final-project(eventsy)](https://in-info-web4.luddy.indianapolis.iu.edu/~zayadam/final-project)
