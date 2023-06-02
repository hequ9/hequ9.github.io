<script lang="ts" setup>
const {
  VITE_EMAIL,
  VITE_GITHUB_ACCOUNT,
  VITE_LOCATION,
} = import.meta.env
</script>

<template>
  <div
    flex="~ col"
    text="white"
    un-children="flex-(~ items-center 1) py-10"
    all="[a]-(no-underline text-(14 !white) font-satoshi whitespace-nowrap ml-5)"
  >
    <div><i mdi:github /><a :href="VITE_GITHUB_ACCOUNT">{{ VITE_GITHUB_ACCOUNT }}</a></div>
    <div><i mdi:email /><a :href="`mailto:${VITE_EMAIL}`">{{ VITE_EMAIL }}</a></div>
    <div><i icon-park-solid:local-two /><a>{{ VITE_LOCATION }}</a></div>
  </div>
</template>

<style lang="scss" scoped>
</style>
