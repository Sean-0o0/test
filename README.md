##### 安装

```
npm i @sihe/emoji-item -S
```

##### 页面引入


```
//##一点小改变
// 组件引入 
import emojiItem from '@sihe/emoji-item';
// 方法引入
import {deleteEmoji, replaceEmoji } from '@sihe/emoji-item';
// 常量引入 
import { EMOJI_LIST } from '@sihe/emoji-item';
```

##### npm 组件使用例子

```
import emojiItem from '@sihe/emoji-item';
<template>
	<view slot="bottom" class="input-box" :style="{'height': visible ? '500upx' : '100upx'}" >
		 ...
		<emoji-item v-show="visible"
			@handleSelectEmoji="handleSelectEmoji"
			@handleDeleteEmoji="handleDeleteEmoji"
			:emojiData="emojiData"
			title="小黄脸"
			:hiddenEmoji="['[撇嘴]', '[删除]']"
		></emoji-item>
	</view>
</template>

export default {
	components: {emojiItem}
}
```
##### npm 方法&常量使用例子
```
import {deleteEmoji, EMOJI_LIST} from '@sihe/emoji-item';
export default {
	data() {
		return {
			value:'',
			emojiList: EMOJI_LIST
		};
	},
	mounted() {
	},
	methods: {
		/**
		 * 删除emoji表情
		 */
		handleDeleteEmoji(){
			this.value = deleteEmoji(this.value);
		},
	}
}
```

##### 重要属性说明

- 两个自定义事件

|               自定义事件               |     用途     |
| :------------------------------------: | :----------: |
| @handleSelectEmoji="handleSelectEmoji" | 选择表情事件 |
| @handleDeleteEmoji="handleDeleteEmoji" | 删除表情事件 |

- 三个自定义属性

|  属性名称   |  类型  |      含义       | 是否必填 | 默认值 |
| :---------: | :----: | :-------------: | :------: | :----: |
|  emojiData  | String | *自定义表情数据 |    否    |   --   |
|    title    | String | 自定义表情标题  |    否    |   --   |
| hiddenEmoji | Array  | *自定义隐藏表情 |    否    |   --   |

​	*自定义表情数据格式如下：

```
export default [
	{
		"url": require('../../static/chat/dingding/emotion_001.png'), //base64形式字符串
		"alt": "[微笑]"
	},
    ...
]
```

​	*自定义隐藏表情使用格式如下：

```
<emoji-item
    :hiddenEmoji="[
		'[撇嘴]',
		'[删除]',
		...
	]"
    ...
></emoji-item>
```

- EMOJI_LIST（默认表情数据）格式如下：

```
export default [
	{
		"url": "emoji_49@2x.png",
		"alt": "[微笑]"
	},
	...
]
```

- deleteEmoji，删除整个表情文本的方法。

```
function deleteEmoji (arg: string) => string
```

- replaceEmoji，替换表情文本为默认表情图片的方法。！！注意：该方法不适用于自定义表情数据。

```
function replaceEmoji (arg: string) => object
```
