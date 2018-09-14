$(document).ready(function(){
	$("#add").click(function(){
		let keyword=$("#keyword").val();
		let mean=$("#mean").val();
		let imageWord=$("#image-word").val();
		addWord();
		getNameInputFile(imageWord);
	})
})
function addWord(){
	console.log('a');
	// chrome.storage.sync.set({key: value}, function() {
 //          console.log('Value is set to ' + value);
 //    });
  
 //    chrome.storage.sync.get(['key'], function(result) {
 //      console.log('Value currently is ' + result.key);
 //    });
}
function getNameInputFile(nameFile){
	if (nameFile) {
	    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
	    var filename = fullPath.substring(startIndex);
	    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
	        filename = filename.substring(1);
	    }
	    alert(filename);
	}
}