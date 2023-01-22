<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Todo</TableHeadCell>
    <TableHeadCell>Actions</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.todo}</TableBodyCell>
        <TableBodyCell>{item.priority}</TableBodyCell>
        <TableBodyCell>
          <ButtonGroup>
            <Button on:click={() => handleEdit(item.id)}>Edit</Button>
            <Button on:click={() => handleDetails(item)}>View Details</Button>
            <Button on:click={() => removeTodo(item.id)}>Delete</Button>
          </ButtonGroup>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>


<script lang="ts">
  import { useNavigate } from 'svelte-navigator'

  import { ButtonGroup, Button, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';

  import { removeTodo, todos } from '../../src/store/todo';

  const navigate = useNavigate()
  let searchTerm = '';
  $: filteredItems = $todos.filter(
    (item: any) => item?.todo?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  const handleEdit = (id: number) => {
    navigate(`/add-todo/${id}`)
  }

  const handleDetails = (item: any) => {
    navigate(`/view-todo-details?id=${item.id}`)
  }
</script>
