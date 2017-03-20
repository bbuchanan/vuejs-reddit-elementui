import Vue from 'vue'
import Component from 'vue-class-component'
import axios from 'axios'
import { Posts, ParsedPost, PostParser } from '../models/posts'

@Component
export default class HelloReddit extends Vue {
	subreddit: string = 'csharp'
	data: string = 'Hello'
	posts: Array<ParsedPost> = []
	errorMessage: string = ''
	mounted() {
		this.load()
	}
	load() {
		axios.get(`https://www.reddit.com/r/${this.subreddit}/top.json?limit=5`).then(response => {
			let redditPosts: Posts = response.data
			let postParser: PostParser = new PostParser(redditPosts)
			this.posts = postParser.getParsedPosts()
		})
	}
}
