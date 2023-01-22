{#await promise}
	<p>...waiting</p>
{:then users}
	{#each users as item}
    <li> 
    <HighlightWrapper>
      { item.name }
    </HighlightWrapper>  
    </li>
  {/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
import { getUsersList } from "../services/user.service";
import HighlightWrapper from "../components/HighlightWrapper.svelte"
  let promise = getUsersList()

</script>