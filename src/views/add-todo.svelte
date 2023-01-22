<div class="flex flex-col items-center">
  <div class="text-2xl">Add todo here...</div>
  <TodoForm on:formValue={handleTodo} 
  editMode={editMode}
  id={$params.id} />
</div>

<script lang="ts">
  import { onMount } from 'svelte';

  import { useParams, useNavigate } from "svelte-navigator";

  import TodoForm from '../../src/components/todo-form.svelte'
  import { addTodo, updateTodo } from '../../src/store/todo';

  // props
  export let id: any = undefined

  // variables
  const params = useParams()
  const navigate = useNavigate()
  let editMode = false

  onMount(() => {
    editMode = Number($params.id) > 0
  })

  const handleTodo = (e: any) => {
    if(e.detail.idEditMode) {
      updateTodo(e.detail.formData)
      navigate('/todo-list')
    } else {
      addTodo(e.detail.formData)
    }

  }
</script>
