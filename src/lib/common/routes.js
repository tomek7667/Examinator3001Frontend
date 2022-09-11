let routeNames = ["Home", "Public Exams", "Your Exams", "Account"];
let routes = {};
routeNames.forEach((name, index) => {
  routes[name.replaceAll(" ", "_").toLowerCase()] = name;
});

export { routeNames, routes };
