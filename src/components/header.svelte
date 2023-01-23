{#if isTokenAvailable}
<Navbar let:hidden let:toggle>
    <div class="flex">
      <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Svelte Todo App
    </span>
  </div>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    {#each SideNavList as item }
    <NavLi>
      <Link to="{item.route}">{item.name}</Link>
    </NavLi>
    {/each}
    <NavLi>
      <Button on:click={handleLogout}>Logout</Button>
    </NavLi>
  </NavUl>
</Navbar>
{/if}

<script>
  import { Link, useNavigate } from 'svelte-navigator'

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte'

  import { SideNavList } from '../constants/sidebar'
  import { onDestroy, onMount } from 'svelte';
  import { setToken, token } from '../store/user';
  import { logout } from '../services/login.service';

  const navigate = useNavigate()

  let isTokenAvailable
  let tokenSub

  onMount(() => {
    tokenSub = token.subscribe((res) => {
      isTokenAvailable = res?.length
    })
  })


  onDestroy(() => {
    tokenSub()
  })

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    setToken('')
    navigate('/')
  }
</script>
