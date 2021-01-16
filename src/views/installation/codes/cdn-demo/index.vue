<template>
	<SourceCode>{{code}}</SourceCode>
</template>

<script>
	import SourceCode from "src/components/source-code";
	import code from "./code";

	export default {
		components: {
			SourceCode
		},
		data() {
			return {
				code
			};
		}
	};
</script>