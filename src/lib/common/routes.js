let routeNames = [
  "Home",
  "Public Exams",
  "Your Exams",
  "Account",
  "Create Exam",
];
let routes = {};
routeNames.forEach((name, index) => {
  routes[name.replaceAll(" ", "-").toLowerCase()] = name;
});

export { routeNames, routes };
