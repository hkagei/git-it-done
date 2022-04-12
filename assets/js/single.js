var getRepoIssues = function(repo) {
    console.log(repo);
  };
  
var displayIssues = function(issues) {

};
var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");


  getRepoIssues("facebook/react"){
      var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

      fetch(apiUrl).then(function(response) {
        if (issues.length === 0) {
            issueContainerEl.textContent = "This repo has no open issues!";
            return;
          }

        
        // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                displayIssues(data);
            
                // check if api has paginated issues
                if (response.headers.get("Link")) {
                  console.log("repo has more than 30 issues");
                }
              });
            }
            
                    // create a link element to take users to the issue on github
                    // create span to hold issue title
var titleEl = document.createElement("span");
titleEl.textContent = issues[i].title;

// append to container
issueEl.appendChild(titleEl);

// create a type element
var typeEl = document.createElement("span");

// check if issue is an actual issue or a pull request
if (issues[i].pull_request) {
  typeEl.textContent = "(Pull request)";
} else {
  typeEl.textContent = "(Issue)";
}

// append to container
issueEl.appendChild(typeEl);

                  }
                  
            }
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      });