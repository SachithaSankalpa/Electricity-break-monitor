<script>
  import { onDestroy } from "svelte";
  import { dbData, timestamp } from "../store";

  import TowerIndicator from "../components/TowerIndicator.svelte";

  let dataObj = [];
  let timeData = {};

  const unsubscribeDB = dbData.subscribe(value => {
    if (value) {
      dataObj = value;
    }
  });

  const unsubscribeTIME = timestamp.subscribe(value => {
    if (value) {
      timeData.cts = value.cts;
      timeData.sts = value.sts;
    }
  });

  onDestroy(() => {
    unsubscribeDB();
    unsubscribeTIME();
  });
</script>

<svelte:head>
  <title>Electricity Break Monitor</title>
</svelte:head>

<div class="py-4 flex justify-center">
  <h1 class="text-3xl">ROAD01</h1>
</div>

<div class="flex flex-row flex-wrap justify-center">
  {#each dataObj as obj}
    <TowerIndicator data={obj} time={timeData} />
  {/each}
</div>
