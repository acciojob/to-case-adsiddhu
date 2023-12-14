function toCase(text) {
  // write your code here
	if(text===''){
		return'-';
	}
	const lowercase=text.toLowerCase();
	const uppercase=text.toUpperCase();

	return ${lowercase}-${uppercase};
}
const text = prompt("Enter text:");
alert(toCase(text));
