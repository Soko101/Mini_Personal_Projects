"use strict";

document.getElementById("fetchButton").addEventListener("click", () => {
    const githubUsername = document.getElementById("username").value.trim();
    const accessToken = document.getElementById("accessToken").value.trim();
    const repoList = document.getElementById("repoList");

    if (githubUsername && accessToken) {
        fetch(`https://api.github.com/users/${githubUsername}/repos`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    repoList.innerHTML = ""; // Clear previous results
                    data.forEach(repo => {
                        const listItem = document.createElement("li");
                        listItem.className = "list-group-item";
                        const repoLink = document.createElement("a");
                        repoLink.href = repo.html_url;
                        repoLink.textContent = repo.name;
                        listItem.appendChild(repoLink);
                        repoList.appendChild(listItem);
                    });
                } else {
                    repoList.innerHTML = "<li class='list-group-item'>No repositories found.</li>";
                }
            })
            .catch(error => {
                repoList.innerHTML = `<li class='list-group-item text-danger'>Error: ${error.message}</li>`;
            });
    } else {
        repoList.innerHTML = "<li class='list-group-item text-danger'>Please enter a username and access token.</li>";
    }
});