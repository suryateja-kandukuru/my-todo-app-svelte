<div class="w-screen h-screen flex justify-center items-center">
  <Button color="purple" on:click={ handleLogin }>Click here to login</Button>
</div>

<script>
  import { useNavigate } from 'svelte-navigator';
  import { Button } from 'flowbite-svelte';
  import { login } from '../services/login.service';
  import { onMount } from 'svelte';
  import { setToken } from '../store/user';
  const navigate = useNavigate()
  

  onMount(() => {
    if(localStorage.getItem('token')?.length) {
      setToken('bearer')
      navigate('/add-todo')
    }
  })
  const handleLogin = async () => {
    const result = await login()
    setToken('bearer')
    console.log(result)
    navigate('/add-todo')
  }

</script>