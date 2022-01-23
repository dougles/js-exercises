 function anamgram_by_array(strA, strB) {

 	return formatString(strA) === formatString(strB);
 }


 function formatString(str) {
 	return str.replace(/[\W]/g, '').toLowerCase().split('').sort().join('');
 }



 function anagrams_map(strA, strB) {

 	const mapedStringA = mapString(strA);
 	const mapedStringB = mapString(strB);


 	if (Object.keys(mapedStringA).length !== Object.keys(mapedStringB).length) {
 		return false;
 	}

 	for (let key in mapedStringA) {
 		if (mapedStringA[key] !== mapedStringB[key]) {
 			return false;
 		}
 	}

 	return true;
 }


 function mapString(str) {
 	const result = {};

 	for (let char of str.replace(/\W/g, '').toLowerCase()) {
 		result[char] = result[char] + 1 || 1;
 	}

 	return result;
 }

 