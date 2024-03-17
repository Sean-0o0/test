<template>
	<div class="emoji-box" >
		<view class="popover-box" v-if="isLongTap" :style="{top:popupTop+'px',left:popupLeft+'px'}">
			<view class="popover-top">
				<image class="popover-emoji-icon" :alt="longTapEmoji.alt" :src="getEmojiURL(longTapEmoji)"></image>
				<text style="font-size: 24upx; color: #8b8b8b;">{{longTapEmoji.alt.slice(1,-1)}}</text>
			</view>
			<!-- #ifdef APP-NVUE -->
			<view class="popover-bottom-rectangle"></view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="popover-bottom-triangle"></view>
			<!-- #endif -->	
		</view>
		<scroll-view class="emoji-item-box" show-scrollbar="false" scroll-y="true">
			<view class="emoji-title" v-if="this.title">
				<text style="font-size: 28upx; line-height: 100upx;">{{this.title}}</text>
			</view>
			<view class="items-wrapper">
				<view class="emoji-item" v-for="(item, index) in emojiList" :key="index" 
					:id="index"
					hover-class="hover-class"
					>
					<image class="emoji-icon" :class="'icon'+index" :ref="'icon'+index"
						@touchmove="tapMove($event,index)"
						@longpress="longtap(item,$event,index)"
						@touchend="longtapEnd" 
						@tap="handleSelectEmoji(item,$event)"
						:alt="item.alt" :src="getEmojiURL(item)">
					</image>
				</view>
			</view>
			<view style="width: 100vw;height: 100upx;"></view>
		</scroll-view>
		<view class="emoji-delete">
			<image class="emoji-delete-image" :src="require('../../static/emoji/emoji_13@2x.png')"
				mode="widthFix" @tap="handleDeleteEmoji"></image>
		</view>
	</div>
</template>

<script>
	import EMOJI_LIST from '../../static/emoji/emoji.js';
	// #ifdef APP-NVUE
	const dom = weex.requireModule('dom');
	// #endif

	export default {
		props: {
			emojiData: {
				type: Array,
				required: false
			},
			hiddenEmoji: {
				type: Array,
				required: false
			},
			title: {
				type: String,
				required: false
			}
		},
		computed: {
			emojiList() {
				let data = [];
				if (!this.emojiData) {
					if (this.hiddenEmoji) {
						data = this.defaultEmojiData.filter((ed) => {
							return !this.hiddenEmoji.includes(ed.alt);
						});
						return data; //过滤完隐藏表情后的数据
					}
					return this.defaultEmojiData; //默认表情数据
				}
				return this.emojiData; //自定义表情数据
			},
			isDIYEmoji() {
				if (!this.emojiData) {
					return false;
				}
				return true; // 是否自定义表情数据，默认为true
			}
		},
		data() {
			return {
				defaultEmojiData: EMOJI_LIST, //默认表情数据
				isLongTap: false, //是否长按
				longTapEmoji: {   //被长按的表情
					url: 'emoji_49@2x.png',
					alt: '[微笑]'
				},
				popupTop: '',    //表情节点的上边界坐标
				popupLeft: ''    //表情节点的左边界坐标
			}
		},
		methods: {
			/**
			 * 获取表情图片路径
			 */
			getEmojiURL(item) {
				return this.isDIYEmoji ? item.url : require(`../../static/emoji/${item.url}`);
			},

			/**
			 * 选择emoji表情
			 */
			handleSelectEmoji(item) {
				this.$emit('handleSelectEmoji', item);
			},

			/**
			 * 删除emoji表情
			 */
			handleDeleteEmoji() {
				this.$emit('handleDeleteEmoji');
			},

			/**
			 * 处理表情长按事件
			 */
			longtap(item, e, index) {
				this.isLongTap = true;
				this.longTapEmoji = item;
				// console.log('手指正长按着...');
				// #ifdef APP-NVUE
				const result = dom.getComponentRect(this.$refs['icon' + index][0], option => {
					this.popupTop = option.size.top - '70'
					this.popupLeft = option.size.left - '10'
				});
				// #endif
				// #ifdef H5
				const result = uni.createSelectorQuery().select('.icon' + index)
				const result2 = result.boundingClientRect(data => {
					this.popupTop = data.top - '30'
					this.popupLeft = data.left - '10'
				}).exec();
				// #endif
			},
			longtapEnd() {
				this.isLongTap = false;
				// console.log('手指离开屏幕...');
			},
			tapMove(e,index) {
				this.isLongTap = false;
				// console.log(e.touches[0].clientX);
			}
		}
	};
</script>

<style>
	@import './index.css';
</style>
