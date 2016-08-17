/* global $ */
/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Ernesto Cortez";
 var formattedName = HTMLheaderName.replace("%data%", name);
 
 var role = "Software Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 
 var bio = {
  "name" : "Louie Cortez",
  "role" : "Software Developer",
  "contacts" : {
   "mobile" : "408-555-5555",
   "email" : "ecortez@csumb.edu",
   "github" : "ernestolcortez",
   "twiiter" : "@ernestolcortez",
   "location" : "Gilroy, CA"
  },
  "welcomeMessage": "Welcome to my portfolio.",
  "skills" : ["C++", "Java", "Python", "HTML"],
  "bioPic" : "images/me.jpg"
  
 };
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#main").append(bio.name);