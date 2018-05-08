<template>
  <div>
    <li> Bar: {{ isBar }} </li>
    <li> Foo: {{ foo }} </li>
    <br>
    <button @click="enableFooAndBar">Enable Foo and Bar</button>
    <button @click="disableFooAndBar">Disable Foo and Bar</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',

  data () {
    return {
      watchedFoo: false,
      isBar: false
    }
  },

  watch: {
    foo (value) {
      this.watchedFoo = value
    }
  },

  computed: {
    ...mapGetters(['foo']),

    fooAndBarIsTrue () {
      return this.foo && this.isBar
    }
  },

  methods: {
    ...mapActions(['enableFoo', 'disableFoo']),

    enableFooAndBar () {
      this.enableFoo()
      this.isBar = true
    },

    disableFooAndBar () {
      this.disableFoo()
      this.isBar = false
    },
  }
}
</script>