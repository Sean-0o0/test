/**
 * 删除emoji表情
 */
const deleteEmoji = function(value) {
	if (value.length) {
		//最后一个字符
		let lastStr = value.slice(-1);
		let arr = value.split('');
		let ind = null;
		let str = null;
		if (lastStr == ']') {
			//最后一个字符是右中括号，判断倒数顺序是否存在左中括号
			arr.forEach((item, index) => {
				if (item == '[') {
					//覆盖之前的，得到最后一个左中括号
					ind = index;
					str = item;
				}
			})
			if (ind != null && str != null && str == '[') {
				//表情删除
				value = value.substring(0, ind);
			} else {
				//正常逐个字符删除
				value = value.substring(0, value.length - 1);
			}
		} else {
			//正常逐个字符删除
			value = value.substring(0, value.length - 1);
		}
	}
	return value;
};

export default deleteEmoji;
