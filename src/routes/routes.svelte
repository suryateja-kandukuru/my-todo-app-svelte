<Router>
  <Header />
	<div class="w-full p-4">
		<Route path="/add-todo">
			<AddTodo />
		</Route>
		<Route path="/add-todo/:id" let:params>
			<AddTodo id={params.id}/>
		</Route>
		<Route path="/todo-list">
			<TodoList />
		</Route>
		<Route path="/view-todo-details">
			<ViewDetails />
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
  import TodoList from "../views/todo-list.svelte";
  import ViewDetails from "../views/view-details.svelte";

</script>