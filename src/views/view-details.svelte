<script lang="ts">
  import { onDestroy } from 'svelte';
  import { useLocation } from 'svelte-navigator'
  import { todos } from '../store/todo';
	const location = useLocation();
  let todo 
  const locationSub = location.subscribe((res) => {
    let id = Number(res.search.split('?')[1].split('=')[1])
    console.log('xx', id)
    todos.subscribe((res) => {
      todo = res.filter((ele: any) => ele.id == id)[0]
    })
  })
  locationSub()
</script>

<div class="text-2xl">Here are the details of todo id: </div>
<ul class="mt-4">
<li>Id: {todo.id}</li>
<li>Todo: {todo.todo}</li>
<li>Priority : {todo.priority}</li>
</ul>