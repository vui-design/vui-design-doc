<template>
	<Layout>
		<Header />
		<Body>
			<router-view />
		</Body>
		<Footer />
	</Layout>
</template>

<script>
	import Layout from "@/components/layout";
	import Header from "@/components/header";
	import Body from "@/components/body";
	import Footer from "@/components/footer";
	
	export default {
		components: {
			Layout,
			Header,
			Body,
			Footer
		}
	};
</script>