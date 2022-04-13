var issueContainerEl = document.querySelector("#issues-container");

var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

    fetch(apiUrl).then(function(response) {
        //request was successful
        if (response.ok) {
            response.json().then(function(data) {
                // pass response data to dom function
                displayIssues(data);
            });
        }
        else {
            alert("There was a problem with your request!");
        }
    });
    console.log(repo);
  };

  var displayIssues = function(issues) {

    for (var i = 0; i < issues.length; i++) {
        // creates a link element to take users to the issue on github
         var issueEl = document.createElement("a");
         issueEl.classList = "list-item flex-row justify-space-between align-center";

         issueEl.setAttribute("href", issues[i].htm_url);

         issueEl.setAttribute("target", "_blank");

         // creates span to hold issue title
         var titleEl = document.createElement("span");
         titleEl.textContent = issues[i].title;

         // append to container
         issueEl.appendChild(titleEl);

         // create a type element
         var typeEl = document.createElement("span");

         // check if an issue is an actual issue or a pull request
         if (issues[i].pull_request) {
             typeEl.textContent = "(Pull request)";
         } else {
             typeEl.textContent = "(Issue)";
         }
         issueContainerEl.appendChild(issueEl);
    }

};
  
  getRepoIssues("facebook/react");