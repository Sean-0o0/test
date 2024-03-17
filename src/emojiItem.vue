<template>
	<div class="emoji-box">
		<view class="emoji-item-box">
			<view class="emoji-item" v-for="(item, index) in emojiList" :key="index" hover-class="hover-class"
				@tap="handleSelectEmoji(item)">
				<image class="emoji-icon" :alt="item.alt" :src="renderImage(item)"></image>
			</view>
		</view>
		<view class="emoji-delete">
			<image style="width:60upx ; display: block; margin: 0 auto;"
				src="../static/emoji/emoji_13@2x.png" mode="widthFix" @tap="handleDeleteEmoji"></image>
		</view>
	</div>
</template>

<script>
	import EMOJI_LIST from '../static/emoji/emoji.js';
	import parseHtml from '../utils/parseHtml.js';
	
	/**
	 * 替换表情符号为图片
	 */
	const replaceEmoji = function(str) {
		str = str.replace(/<img src=/g, '<img style="width: auto;max-width: 100%;height: 120px;" src=');
		let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
			for (let i = 0; i < EMOJI_LIST.length; i++) {
				let EM = EMOJI_LIST[i];
				if (EM.alt == item) {
					let img = require(`../static/emoji/${EM.url}`);
					let imgstr = '<img width="28px" src="' + img + '">';
					return imgstr;
				}
			}
		});
		let htmls = '<div style="word-wrap:break-word;line-height: 20px;">' + replacedStr + '</div>';
		let nodes = parseHtml(htmls);
		return nodes;
	};
	
	export { replaceEmoji };
	export default {
		props: {},
		computed: {},
		data() {
			return {
				emojiList: EMOJI_LIST, // 表情列表
			}
		},
		mounted() {},
		methods: {
			/**
			 * 渲染emoji图片
			 * @param {Object} item img
			 */
			renderImage(item) {
				return require(`../static/emoji/${item.url}`);
			},
			/**
			 * 选择emoji表情
			 */
			handleSelectEmoji(item) {
				this.$emit('handleSelectEmoji', item);
			},
			handleDeleteEmoji() {
				this.$emit('handleDeleteEmoji');
			}
		}
	};
</script>

<style>
	@import './index.css';
</style>
