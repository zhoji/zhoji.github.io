---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="about-two-col">
  <div class="text-col">
    <p>I'm a research associate in the <a href="https://fieldslab.ucsf.edu/">Fields Lab for Orthopaedic Biomechanics and Biotransport</a> at UCSF. I'm currently studying chronic low back pain as part of the <a href="https://heal.nih.gov/research/clinical-research/back-pain">Back Pain Consortium Research Program</a> (BACPAC), a collaborative effort funded by the <a href="https://heal.nih.gov/">NIH Heal Initiative</a> aimed at understanding and treating chronic low back pain (cLBP).</p>
    <p>My recent work focuses on developing and utilizing advanced, quantitative MRI-based methods to characterize endplate damage and other spinal pathologies that are often overlooked in standard clinical assessments. A large part of this research involves designing models that can extract meaningful biomarkers associated with cLBP for better pain phenotyping. I'm particularly interested in how we can move beyond conventional, descriptive imaging toward more predictive, mechanistic insights that support personalized approaches to treatment.</p>
  </div>
  <div class="portrait-col">
    <figure class="captioned-image-2">
      <img src="images/fields_lab.png" alt="Fields Lab">
      <figcaption>The Fields Lab at UCSF Parnassus</figcaption>
    </figure>
    <br>
    <figure class="captioned-image-2">
      <img src="images/jiamin_lab.jpg" alt="science happening here">
      <figcaption>Cosplaying as a wet lab researcher</figcaption>
    </figure>
  </div>
</div>
<div class="about-two-col alternate">
  <div class="portrait-col">
    <figure class="captioned-image-2">
      <img src="images/jiamin_squat_crop.png" alt="meow">
      <figcaption>The optimal pose for taking pics of stray cats</figcaption>
    </figure>
  </div>
  <div class="text-col">
    <p>Prior to work, I did a Master's thesis in Biomedical Imaging on MEG inference using ML at the <a href="https://rajlab.ucsf.edu/">Brain Networks Lab</a> at UCSF, and my BA Honours dissertation on mathematical modeling of cone phototransduction with Dr. <a href="https://www.pdn.cam.ac.uk/directory/hugh-matthews">Hugh Matthews</a> at the University of Cambridge.</p>
    <p>In my free time, I love to travel, do yoga, and cook + eat delicious food. Check out my <a href="/gallery/">gallery</a> for a few pictures from my travels! You can also check out my <a href="https://beliapp.co/app/jiamineats">Beli</a> restaurant rankings, or add me as a friend on <a href="https://www.nytimes.com/crosswords/apps?code=1d19cb3c-c5cd-4ea9-bf8e-ddaf54e67316">NYT Games</a>.</p>
  </div>
</div>
<div class="about-two-col">
  <div class="text-col">
    <p>I used to play violin in various extracurricular orchestras:<ul class="compact-list"><li><a href="https://gdyo.org/">Greater Dallas Youth Orchestra</a> (2007-2015)</li><li><a href="https://www.facebook.com/CamUniMusSoc">Cambridge University Musical Society</a> (2017-2018)</li><li><a href="https://www.cuso.org.uk/">Cambridge University Symphony Orchestra</a> (2017-2018)</li></ul> I'm a little rusty now, but I'd love an opportunity to perform ensemble repertoire with other amateur musicians in SF :)</p>
    <p>Feel free to contact me through email or social media if you want to talk more about science, travel, food, or music!</p>
  </div>
  <div class="portrait-col">
    <figure class="captioned-image-2">
      <img src="images/jiamin_violin_portrait.jpg" alt="violin">
    </figure>
  </div>
</div>

<style>
  ul.compact-list {
    margin: 0;
    margin-top: -0.5em; /* or even 0 */
    margin-bottom: 1em; /* optional: adjust spacing after the list */
    padding-left: 1.2em;
    line-height: 1.4;
    list-style-type: circle; /* or 'circle', 'none', etc. */
  }

  ul.compact-list li {
    margin-bottom: 0.3em; /* Reduce spacing between list items */
  }

  .about-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    margin: 2rem 0;

    grid-template-areas: "text image";

    &.alternate {
      grid-template-areas: "image text";
    }

    .portrait-col {
      grid-area: image;
    }

    .text-col {
      grid-area: text;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "text"
        "image";
      &.alternate {
        grid-template-areas:
          "text"
          "image";
      }
    }
  }

  .portrait-col img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 400px;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  .captioned-image-2 {
    margin: 0;
  }

  .captioned-image-2 figcaption {
    font-size: 0.9rem;
    font-style: italic;
    color: #888;
    margin-top: 0rem;
  }

  html[data-theme='dark'] .captioned-image-2 figcaption {
    color: #aaa;
  }

  .text-col p:first-of-type {
    margin-top: -1.5rem;
  }

</style>