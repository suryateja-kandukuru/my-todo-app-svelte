<Router>
  <Header />
	<div>
		<Route path="/">
			<About />
		</Route>
	</div>
</Router>

<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Header from "../components/header.svelte";
  import About from "../views/about.svelte";

</script>