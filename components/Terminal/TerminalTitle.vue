<script lang="ts" setup>
// defineProps<{ msg: string }>()
</script>

<template>
  <div
    flex="~ items-center justify-center"
    relative
    w-full
    pb-10px
    border-b="1 solid #222324"
  >
    <div
      position="absolute left-0"
      flex
      space-x-5px
      un-children="rounded-full w-14px h-14px border-(1 solid)"
    >
      <div
        bg="#F95C5B"
        border="#D63C41"
      />
      <div
        bg="#FABE3B"
        border="#C79536"
      />
      <div
        bg="#38CD46"
        border="#2DAB31"
      />
    </div>
    <span
      flex="~ items-center"
      text="#7B7C7D"
      font="bevellier"
    >
      <i
        teenyicons:markdown-solid
        size="w-14px h-14px"
        mr="5px"
      />
      ./README.md
    </span>
  </div>
</template>

<style lang="scss" scoped>
</style>
