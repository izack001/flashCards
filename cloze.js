function ClozeCard(text, cloze){
	this.fullText=text;
	this.cloze=cloze;
	this.partial=text.replace(cloze, "..........");

}

module.exports=ClozeCard;


// var str = 'Twas the night before Xmas...';
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr);  // Twas the night before Christmas...

