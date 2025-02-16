<script lang="ts" setup>
// defineProps<{ msg: string }>()
</script>

<template>
  <div class="panel">
    <div class="panel-title">
      <strong
        text="6 #1B3142"
        leading="[2]"
      >
        <slot name="title" />
      </strong>
    </div>
    <div class="panel-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  .panel-title {
    @apply border-b-(3 solid #1B3142);
  }
  .panel-content {
    @apply py-4;
  }
}
</style>
