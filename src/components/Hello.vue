<template>
  <div>
    <h1 @click="hello">{{ msg }}</h1>
    <p>This is a computed property {{ computedMsg }}</p>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Hello extends Vue {
	msg = 'Hey'
	hello() {
		alert('hello world!')
	}

	get computedMsg() {
		return 'computed stuff: ' + this.msg
	}
}
</script>
