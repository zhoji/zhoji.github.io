// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "under construction - stay tuned for more!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "Here&#39;s a selection of photos I&#39;ve taken during my travels! :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-first-personal-academic-website-published-on-github-pages",
          title: 'First personal/academic website published on GitHub Pages!',
          description: "",
          section: "News",},{id: "news-oral-presentations-at-issls-2025",
          title: 'Oral presentations at ISSLS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-article-in-press-in-the-spine-journal-check-it-out-here",
          title: 'Article in press in The Spine Journal: check it out here',
          description: "",
          section: "News",},{id: "news-new-website-format-sparkles-smile",
          title: 'New website format! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-spectrome-ai",
          title: 'Spectrome-AI',
          description: "a Neural Network Framework for Inferring MEG Spectra",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
