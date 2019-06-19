import axios from "axios";

export default {
  // Gets all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },
  // Gets all stories
  getStories: function () {
    return axios.get("/api/stories");
  },
  // Gets the story with the given id
  getStory: function (id) {
    return axios.get("/api/stories/" + id);
  },
  // Deletes the story with the given id
  deleteStory: function (id) {
    return axios.delete("/api/stories/" + id);
  },
  // Sets the state of Icebox for the story to "true"
  iceboxStory: function (id) {
    return axios.put("/api/stories/" + id + "/true");
  },
  // Sets the state of Icebox for the story to "false"
  backlogStory: function (id) {
    return axios.put("/api/stories/" + id + "/false");
  },
  // Saves a story to the database
  saveStory: function (storyData) {
    return axios.post("/api/stories", storyData);
  },
  //Saves a new user to the database 
  findLogin: function (loginData) {
    return axios.post("/api/login", loginData);
  },
  saveNewUser: function (signupData) {
    return axios.post("/api/user", signupData)
  }
};
