const ghpages = require("gh-pages");
const pathname = `$(__dirname)/build`;
const repoURL = "https://trao90.github.io/tayyab"

ghpages.publish(
    pathname,
    {
        branch: "main",
        repo: repoURL,
    },
    (err) => {
        if (err) console.log("Error: ", err);
        else console.log("DEPLOY HO GAYA!!!!")
    }
)