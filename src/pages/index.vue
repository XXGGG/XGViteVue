<template>
  <div>
    <nav w-40 h-10 flex="~" justify-around items-center class='position-fixed top-0 right-0'>
      <RouterLink icon-btn to='/'>
        <div i="solar-code-line-duotone" />
      </RouterLink>
      <RouterLink icon-btn to='/about'>
        <div i="logos-pinia" />
      </RouterLink>
      <a icon-btn rel="noreferrer" href="https://github.com/XXGGG/XGViteVue" target="_blank" title="GitHub">
        <div i="hugeicons-github" />
      </a>
      <button icon-btn @click="toggleDark()">
        <div i="solar-sun-2-linear dark:solar-moon-line-duotone" />
      </button>
    </nav>
    <div h-screen w-full flex="~ col" justify-center items-center>
      <div i-solar-code-line-duotone inline-block w-20 h-20 />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
