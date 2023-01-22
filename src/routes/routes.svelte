<Router>
  <Header />
	<div class="w-full p-4">
		<Route path="/">
			<Login />
		</Route>
		<PrivateRoute path="/add-todo">
			<AddTodo />
		</PrivateRoute>
		<PrivateRoute path="/add-todo/:id" let:params>
			<AddTodo id={params.id}/>
		</PrivateRoute>
		<PrivateRoute path="/todo-list">
			<TodoList />
		</PrivateRoute>
		<PrivateRoute path="/view-todo-details">
			<ViewDetails />
		</PrivateRoute>
		<PrivateRoute path="/about">
			<About />
		</PrivateRoute>
	</div>
</Router>

<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Header from "../components/header.svelte";
	import AddTodo from "../views/add-todo.svelte";
  import About from "../views/about.svelte";
  import TodoList from "../views/todo-list.svelte";
  import ViewDetails from "../views/view-details.svelte";
  import Login from "../views/login.svelte";
	import PrivateRoute from './private-route.svelte'
</script>