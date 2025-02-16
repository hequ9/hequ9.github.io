<script lang="ts" setup>
import Typed from 'typed.js'

onMounted(() => {
  const _typed = new Typed('#typing', {
    stringsElement: '#typing-string',
    typeSpeed: 40,
  })
})
</script>

<template>
  <div
    id="HomePersonalCard"
    overflow="hidden"
    rounded="6"
    position="absolute left-0 top-[-50px] z99"
    size="w-240px h-full"
    shadow="lg"
    un-before="content-empty bg-(url-[assets/images/card-bg.png] cover) block w-full h-full absolute top-0 left-0 absolute -z-1 blur-8"
  >
    <div
      position="z-99 top-0 left-0"
      size="w-full h-full"
      flex="~ col items-center justify-around"
      bg="[rgba(0,0,0,.6)]"
      px="50px"
    >
      <Avatar />
      <div
        inline-block
        w-full
        text="white center 14px"
        font="satoshi"
        h="60px"
      >
        <div
          id="typing-string"
          display-none
        >
          <p>don't let your mouth write a check that your body can't cash.🙂</p>
        </div>
        <span
          id="typing"
          text-shadow-lg
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
