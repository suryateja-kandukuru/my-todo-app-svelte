<Route {path} let:params let:location let:navigate>
<PrivateRouteGuard>
  <slot {params} {location} {navigate} />
</PrivateRouteGuard>
</Route>

<script lang="ts">
   import { Route } from "svelte-navigator";
  import PrivateRouteGuard from "./private-route-guard.svelte";

  export let path;
</script>