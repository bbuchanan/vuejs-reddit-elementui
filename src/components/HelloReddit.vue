<template>
	<div>
		<h1>Top 5 Posts</h1>
		<p>Enter the subreddit to see the top 5 posts.</p>
		<p><input v-model="subreddit"></p>
		<button @click="load">Load Posts</button>
		<el-table
			:data="posts"
			border
			style="width: 100%">
			<el-table-column prop="title" label="title"></el-table-column>
			<el-table-column prop="num_comments" label="comments"></el-table-column>
			<el-table-column prop="ups" label="up votes"></el-table-column>
			<el-table-column prop="downs" label="down votes"></el-table-column>
		</el-table>
	</div>
</template>
<script lang='ts'>
	import HelloReddit from './HelloReddit.ts'
	export default HelloReddit
</script>
