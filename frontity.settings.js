const settings = {
  "name": "porfolio-theme",
  "state": {
    "frontity": {
      "url": "https://dev-portfolio-alex.pantheonsite.io/",
      "title": "Alex's Porfolio   ",
      "description": "Alex's porfolio"
    }
  },
  "packages": [
    {
      "name": "alex-portfolio-theme",

    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://dev-portfolio-alex.pantheonsite.io",
          "homepage": "/home",

          "postTypes": [
            {
              type:"project",
              endpoint:"project",
              archive:"/project-archive"
            }
          ],
          "taxonomies": [
            {
              taxonomy:"technology",
              endpoint:"technology",
              postTypeEndpoint:"project"
            }]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
