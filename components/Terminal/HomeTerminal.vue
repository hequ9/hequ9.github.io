<script lang="ts" setup>
// defineProps<{ msg: string }>()
</script>

<template>
  <div
    id="HomeTerminal"
    rounded="6"
    bg="#141414"
    border="1 solid #222324"
    shadow="lg"
    size="w-1000px h-full"
    float="right"
    p="10px l-150px"
    flex="~ col"
  >
    <TerminalTitle />
    <TerminalContent />
  </div>
</template>

<style lang="scss" scoped>
</style>
