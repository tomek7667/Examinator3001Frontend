<script>
  import { onMount } from "svelte";
  import TopBar from "./top/TopBar.svelte";
  import HomePage from "./HomePage.svelte";
  import PublicExamsPage from "./public_exams/PublicExamsPage.svelte";
  import YourExamsPage from "./your_exams/YourExamsPage.svelte";
  import AccountPage from "./AccountPage.svelte";
  import { Router, Route, Link } from "svelte-routing";
  import CreateExamPage from "./create_exam/CreateExamPage.svelte";
  import Footer from "../common/Footer.svelte";
  import Exam from "./exam/Exam.svelte";
  export let isLoading = true;
  export let username;
  let route = "Home";
  let wantExamCreator = true;
  let canParse = true;
  let examData = {
    name: "",
    questions: [],
    isPublic: false,
  };
  onMount(() => {
    isLoading = false;
  });
  export let url = "";
</script>

<TopBar bind:route />

<Router {url}>
  <Route path="/home"><HomePage bind:route /></Route>
  <Route path="/"><HomePage bind:route /></Route>
  <Route path="/public-exams"><PublicExamsPage /></Route>
  <Route path="/your-exams"><YourExamsPage /></Route>
  <Route path="/account"><AccountPage bind:username /></Route>
  <Route path="/create-exam"
    ><CreateExamPage bind:wantExamCreator bind:examData bind:canParse /></Route
  >
  <Route path="/exam/:id" component={Exam} />
</Router>

<footer>You are logged in as <b>{username}</b><Footer /></footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #1e1e1e;
    height: 65px;
    width: 100%;
    padding: 10px;
  }
</style>
