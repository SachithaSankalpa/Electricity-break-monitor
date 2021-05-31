<script>
  import { onMount } from "svelte";

  const database = firebase.database();

  let operate = false;
  $: ROAD01 = [
    { id: "a1", status: false, lastUpdate: 0 },
    { id: "a2", status: false, lastUpdate: 0 },
    { id: "a3", status: false, lastUpdate: 0 },
    { id: "a4", status: false, lastUpdate: 0 },
    { id: "a5", status: false, lastUpdate: 0 }
  ];

  onMount(() => {
    const interval = setInterval(() => {
      console.info("Updating database ..");
      ROAD01.forEach(element => {
        if (element.status) {
          const currentTime = Date.now();
          element.lastUpdate = currentTime;
          writeToDB(element.id, currentTime);
        }
      });
    }, 30000);
  });

  const writeToDB = (id, timestamp) => {
    console.log("Updating", id);
    database.ref("ROAD01/" + id).set({ cts: timestamp, sts: 1 });
  };
</script>

<svelte:head>
  <title>Electricity Break Monitor : labs</title>
</svelte:head>

<div class="py-4 flex flex-col justify-center text-center">
  <h1 class="text-3xl">ROAD01</h1>
  <h4 class="text-lg">Update database every 30sec</h4>
</div>

<!-- <div class="flex justify-center">
  <div class="flex flex-col w-1/2">
    <span>
      <input type="checkbox" bind:checked={operate} class="mr-4" />
    </span>
    {#each ROAD01 as { id, status }, i}
      <div class="flex flex-row p-4">
        <input type="checkbox" bind:checked={status} class="mr-4" />
        <p>{id}</p>
      </div>
    {/each}
  </div>
</div> -->

<div class="flex flex-wrap">
  {#each ROAD01 as { id, status }, i}
    <div class="w-full md:w-1/2 xl:w-1/3 p-3 ">
      <div class="bg-white border rounded shadow p-2">
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            {#if status}
              <div
                class="rounded p-3 bg-green-600 cursor-pointer"
                on:click={() => {
                  ROAD01[i]['status'] = false;
                }}>
                <i class="fa fa-toggle-on fa-2x fa-fw fa-inverse" />
              </div>
            {:else}
              <div
                class="rounded p-3 bg-red-600"
                on:click={() => {
                  ROAD01[i]['status'] = true;
                }}>
                <i class="fa fa-toggle-off fa-2x fa-fw fa-inverse" />
              </div>
            {/if}
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-500">{id}</h5>
            <h3 class="font-bold text-3xl">{status ? 'Active' : 'Inactive'}</h3>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
