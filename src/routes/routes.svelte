<Router>
  <Header />
	<div class="w-full p-4">
		<Route path="/">
			<AddTodo />
		</Route>
		<Route path="/about">
			<About />
		</Route>
	</div>
</Router>

<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Header from "../components/header.svelte";
	import AddTodo from "../views/add-todo.svelte";
  import About from "../views/about.svelte";

</script>