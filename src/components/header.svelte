hiii { isTokenAvailable }
{#if isTokenAvailable}
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
    <NavLi href="#">
      <Button on:click={handleLogout}>Logout</Button>
    </NavLi>
  </NavUl>
</Navbar>
{/if}

<script>
  import { Link, useNavigate } from 'svelte-navigator'

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte'

  import { SideNavList } from '../constants/sidebar'
  import { onMount } from 'svelte';
  import { setToken, token } from '../store/user';
  import { logout } from '../services/login.service';

  const navigate = useNavigate()
  let isTokenAvailable
  $: console.log($token)
  onMount(() => {
    const sub = token.subscribe((res) => {
      console.log('ss', res)
      isTokenAvailable = res?.length
    })
  })

  const handleLogout = (e) => {
    console.log(localStorage.getItem('token'))
    e.preventDefault()
    logout()
    setToken('')
    navigate('/')
  }
</script>
