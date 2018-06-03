let str = 'урок-3-был слишком легким';

function ucFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

let secondStr = ucFirst(str);

console.log(secondStr);

function replaceHyphen(str) {
	return str.replace(/-/g, ' ');
}

let thirdStr = replaceHyphen(secondStr);

console.log(thirdStr);

/*function deleteWord(str) {
	return str.replace(/легким/,'');
}

let forthStr = deleteWord(thirdStr);

console.log(forthStr);

function addWord(str) {
	return str += 'легко';
}

console.log(addWord(forthStr));*/

let len = str.length,
		word = 'о'; 

function changeSym(str) {
	let newStr = str.slice(0, (len - 2));
	return newStr += word;
}

console.log (changeSym(thirdStr));



let arr = [20, 33, 1, 'Человек', 2, 3];

function deleteElem(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === 'string') {
			arr.splice(i, 1);	
		}
	}
	return arr;
}

console.log (deleteElem(arr));

		

function countResult(arr) {	
	var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += Math.pow(arr[i],3);
	}
	
	Math.sqrt(sum);
	return Math.sqrt(sum);
}

console.log(countResult(arr));

let string = '   Hello fjfdrtygvjfchdfgvhbgfchdxgsdcfgyhuygtfrdszxdcfvghgfcdxs, JS!       '

/*function getStr(str) {
	if (typeof(str) != 'string') {
		alert('Это не строка!')
	}
  string = string.trim();
	
}*/

function getStr(str) {
	if (typeof(str) != 'string') {
		alert('Это не строка!')
	}

	string = string.replace(/(^\s*)|(\s*)$/g, '');
	return string;
}

getStr(string);

if (string.length > 50) {
	console.log(string.slice(0, 50) + '...');
} else {
	console.log(getStr(string));
}

