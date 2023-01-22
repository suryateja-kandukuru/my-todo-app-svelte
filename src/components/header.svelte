<Navbar let:hidden let:toggle>
  <NavBrand href="#">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Svelte Todo App
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    {#each SideNavList as item }
    <NavLi href="#">
      <Link to="{item.route}">{item.name}</Link>
    </NavLi>
    {/each}
  </NavUl>
</Navbar>

<script>
  import { Link, useNavigate } from 'svelte-navigator'

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'

  import { SideNavList } from '../constants/sidebar'
  import { onMount } from 'svelte';

  const navigate = useNavigate()

  onMount(() => {
      navigate('/add-todo')
  })
</script>
