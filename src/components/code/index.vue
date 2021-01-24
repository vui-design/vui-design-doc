<template>
	<pre v-highlightjs><code class="html"><slot>{{code}}</slot></code></pre>
</template>

<script>
	export default {
		props: {
			code: {
				type: String,
				default: undefined
			}
		}
	};
</script>