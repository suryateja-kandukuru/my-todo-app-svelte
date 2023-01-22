<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { token } from "../store/user";

  const navigate = useNavigate();
  const location = useLocation();

  $: if (!$token.length) {
    navigate("/", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $token.length}
  <slot />
{/if}
