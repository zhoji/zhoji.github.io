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
          description: "publications in reversed chronological order.",
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
          description: "a selection of photos I took during my travels! for full quality pictures, contact me.",
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
        },{id: "books-all-the-light-we-cannot-see",
          title: 'All the Light We Cannot See',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/all_the_light/";
            },},{id: "books-the-midnight-library",
          title: 'The Midnight Library',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_midnight_library/";
            },},{id: "books-an-absolutely-remarkable-thing",
          title: 'An Absolutely Remarkable Thing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/an_absolutely_remarkable_thing/";
            },},{id: "books-crying-in-h-mart",
          title: 'Crying in H Mart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/crying_in_h_mart/";
            },},{id: "books-spqr",
          title: 'SPQR',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/spqr/";
            },},{id: "books-cloud-cuckoo-land",
          title: 'Cloud Cuckoo Land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/cloud_cuckoo_land/";
            },},{id: "books-yellowface",
          title: 'Yellowface',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/yellowface/";
            },},{id: "books-under-the-whispering-door",
          title: 'Under the Whispering Door',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/under_the_whispering_door/";
            },},{id: "books-vera-wong-39-s-unsolicited-advice-for-murderers",
          title: 'Vera Wong&amp;#39;s Unsolicited Advice for Murderers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/vera_wong_1/";
            },},{id: "books-disorientation",
          title: 'Disorientation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/disorientation/";
            },},{id: "books-babel",
          title: 'Babel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/babel/";
            },},{id: "books-tomorrow-and-tomorrow-and-tomorrow",
          title: 'Tomorrow, and Tomorrow, and Tomorrow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tomorrow_x3/";
            },},{id: "books-chip-war",
          title: 'Chip War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/chip_war/";
            },},{id: "books-caste",
          title: 'Caste',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/caste/";
            },},{id: "books-exhalation",
          title: 'Exhalation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/exhalation/";
            },},{id: "books-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/project_hail_mary/";
            },},{id: "books-the-goldfinch",
          title: 'The Goldfinch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_goldfinch/";
            },},{id: "books-how-to-win-friends-and-influence-people",
          title: 'How to Win Friends and Influence People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/win_friends/";
            },},{id: "books-the-coddling-of-the-american-mind",
          title: 'The Coddling of the American Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_coddling/";
            },},{id: "books-interior-chinatown",
          title: 'Interior Chinatown',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/interior_chinatown/";
            },},{id: "books-in-memoriam",
          title: 'In Memoriam',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/in_memoriam/";
            },},{id: "books-the-paper-menagerie",
          title: 'The Paper Menagerie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_paper_menagerie/";
            },},{id: "books-pageboy",
          title: 'Pageboy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/pageboy/";
            },},{id: "books-denison-avenue",
          title: 'Denison Avenue',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/denison_avenue/";
            },},{id: "books-martyr",
          title: 'Martyr!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/martyr/";
            },},{id: "books-minor-feelings",
          title: 'Minor Feelings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/minor_feelings/";
            },},{id: "books-the-secret-history",
          title: 'The Secret History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_secret_history/";
            },},{id: "books-yolk",
          title: 'Yolk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/yolk/";
            },},{id: "books-vera-wong-39-s-guide-to-snooping-on-a-dead-man",
          title: 'Vera Wong&amp;#39;s Guide to Snooping (on a Dead Man)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/vera_wong_2/";
            },},{id: "books-the-memory-police",
          title: 'The Memory Police',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_memory_police/";
            },},{id: "books-nexus",
          title: 'Nexus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/nexus/";
            },},{id: "books-real-americans",
          title: 'Real Americans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/real_americans/";
            },},{id: "books-pachinko",
          title: 'Pachinko',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/pachinko/";
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
          section: "News",},{id: "news-preprint-available-on-medrxiv-check-it-out-here",
          title: 'Preprint available on medRxiv: check it out here',
          description: "",
          section: "News",},{id: "news-article-available-in-the-european-spine-journal-check-it-out-here",
          title: 'Article available in the European Spine Journal: check it out here',
          description: "",
          section: "News",},{id: "news-preprint-available-on-medrxiv-check-it-out-here",
          title: 'Preprint available on medRxiv: check it out here',
          description: "",
          section: "News",},{id: "news-awarded-the-2026-issls-prize-in-clinical-science-as-a-co-author",
          title: 'Awarded the 2026 ISSLS Prize in Clinical Science as a co-author',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "projects-pdn-experimental-project",
          title: 'PDN Experimental Project',
          description: "Modelling calcium feedback mechanisms in light adaptation in vertebrate cone photoreceptors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-spectrome-ai",
          title: 'Spectrome-AI',
          description: "a Neural Network Framework for Inferring MEG Spectra",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-verteseg",
          title: 'verteseg',
          description: "Automatic vertebral body segmentation on IDEAL MRI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
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
