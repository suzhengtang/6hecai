<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="less">
	@import "assets/less/index.less";
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
