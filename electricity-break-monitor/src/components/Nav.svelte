<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  const navigateHome = async () => {
    await goto("/");
  };

  const navigateLabs = async () => {
    await goto("/labs");
  };

  onMount(() => {
    // Nav bar stuff
    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }
  });
</script>

<nav id="header" class="bg-white w-full top-0 shadow">

  <div
    class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3
    md:pb-0">

    <div class="w-1/2 pl-2 md:pl-0">
      <span
        class="text-gray-900 text-base xl:text-xl no-underline
        hover:no-underline font-bold cursor-pointer"
        on:click={navigateHome}>
        Electricity Break Monitor - Admin Panel
      </span>
    </div>
    <div class="w-1/2 pr-0">
      <div class="flex relative inline-block float-right">

        <div class="relative text-sm">
          <button
            id="userButton"
            class="flex items-center focus:outline-none mr-3">
            <img
              class="w-8 h-8 rounded-full mr-4"
              src="/defaultuser.webp"
              alt="Avatar of User" />
            <span class="hidden md:inline-block">Hi, Admin</span>
          </button>
        </div>

        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center px-3 py-2 border rounded text-gray-500
            border-gray-600 hover:text-gray-900 hover:border-teal-500
            appearance-none focus:outline-none">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block
      mt-2 lg:mt-0 bg-white z-20"
      id="nav-content">
      <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
        <li class="mr-6 my-2 md:my-0">
          <span
            class="block py-1 md:py-3 pl-1 align-middle text-orange-600
            no-underline hover:text-gray-900 border-b-2 border-orange-600
            hover:border-orange-600 cursor-pointer"
            on:click={navigateHome}>
            <i class="fas fa-home fa-fw mr-3 text-orange-600" />
            <span class="pb-1 md:pb-0 text-sm">Home</span>
          </span>
        </li>
        <li class="mr-6 my-2 md:my-0">
          <span
            class="block py-1 md:py-3 pl-1 align-middle text-orange-600
            no-underline hover:text-gray-900 border-b-2 border-orange-600
            hover:border-orange-600 cursor-pointer"
            on:click={navigateLabs}>
            <i class="fas fa-flask fa-fw mr-3 text-orange-600" />
            <span class="pb-1 md:pb-0 text-sm">Emulator</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</nav>
