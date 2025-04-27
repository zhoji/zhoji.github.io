---
layout: archive
title: "Gallery"
permalink: /gallery/
redirect_from: 
  - /photos/
  - /gallery.html
---

{% include base_path %}

Here's a selection of photos I've taken during my travels! :)

<div class="gallery">
  {% for image in site.data.gallery %}
    <div class="gallery-item">
      <a href="{{ image.url }}" class="glightbox" data-gallery="gallery1" data-glightbox="title: {{ image.title }}; description: {{ image.caption }}">
        <img src="{{ image.url }}" alt="{{ image.alt }}">
      </a>
    </div>
  {% endfor %}
</div>

...and more to come!

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
<script>
  const lightbox = GLightbox({
    selector: '.glightbox',
    skin: 'clean',
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    descPosition: 'left',
    zoomable: false,
    autoplayVideos: false,
    moreLength: 60,
    moreText: 'See more',
  });
</script>

<style>

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.03);
}

.glightbox-clean .gslide-description .gdesc-inner {
  color: #3d3c42;
}

.glightbox-clean .gslide-title {
  font-weight: bold;
  color: #3d3c42;
}

@media (min-width: 768px) {
  html[data-theme="dark"] .glightbox-clean .gslide-description .gdesc-inner {
    color: #f1ddd8;
    background: #26282e;
  }
  html[data-theme="dark"] .glightbox-clean .gslide-title {
    color: #f1ddd8;
    font-weight: bold;
  }
}

.gdesc-inner {
  width: 100%;
  box-sizing: border-box;
}

/* Dim the background */
.glightbox-container {
  background: rgba(0, 0, 0, 0.8);
}

</style>