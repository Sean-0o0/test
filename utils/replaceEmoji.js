import parseHtml from './parseHtml.js';
import EMOJI_LIST from '../static/emoji/emoji.js';
/**
 * 替换表情文本为默认表情图片
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

export default replaceEmoji;
