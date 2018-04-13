<template>
  <div>
    <button class="btn btn-success" @click="increment">Increment</button>
    <button class="btn btn-success" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ])
    }
  }
</script>
