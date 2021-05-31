<script>
  import { onMount } from "svelte";
  import { dbData, timestamp } from "../store";
  import Nav from "../components/Nav.svelte";

  onMount(() => {
    const database = firebase.database();

    // Below comment ensure that web client and server timestamps are synced
    // There's no significant difference between server and web client in LK region
    // But for extra trust of time, fetching the servertime stamp from server
    database.ref("timestamp").set(firebase.database.ServerValue.TIMESTAMP);
    database.ref("timestamp").on("value", snapshot => {
      timestamp.set({ cts: Date.now(), sts: snapshot.val() });
    });

    // Listen to database value changes
    database.ref("ROAD01").on("value", snapshot => {
      const temp = [];
      const snapval = snapshot.val();
      for (let key in snapval) {
        if (snapval.hasOwnProperty(key)) {
          snapval[key]["key"] = key;
          temp.push(snapval[key]);
        }
      }
      dbData.set(temp);
    });
  });
</script>

<Nav />

<main>
  <slot />
</main>
