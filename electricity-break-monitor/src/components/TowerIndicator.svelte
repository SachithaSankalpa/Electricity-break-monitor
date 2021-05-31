<script>
  import { onMount } from "svelte";
  export let data;
  export let time;

  $: timediff = Math.ceil((time.sts - data.sts) / (1000 * 60));
  $: timestatus = "";

  const modifydata = () => {
    if (timediff < 1) {
      timestatus = "< 1 minute";
    } else if (timediff > 60) {
      timestatus = "> 1 hour";
    } else {
      timestatus = `${timediff} minutes ago`;
    }
  };

  onMount(() => {
    modifydata();
    setInterval(modifydata, 10000);
  });
</script>

<div class="flex flex-col w-32 h-48 bg-white m-4 justify-center content-center shadow-md">
  <div
    class="w-16 h-16 {timediff < 10 ? 'bg-green-400' : 'bg-red-600'}
    rounded-full m-auto" />
  <div class="text-center pb-4">
    <h5 class="text-gray-500">{data.key}</h5>
    <h4 class="text-gray-500">Last response:</h4>
    <h4>{timestatus}</h4>
  </div>
</div>
