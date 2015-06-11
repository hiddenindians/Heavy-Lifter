/* User Settings
// --------------
//
// Edit these to suit your needs. 
//
//
*/

var albumTag = "album";
var itemTag = "img";
var itemClass = "photo";
var albumTagClass = "album";
var container = ".heavy-lifter";
var firstAlbumClass = "active-album";
var firstAlbumItemClass = "active-photo";

/* heavyLifter */

function getJSON(callback) {
	var initArray = null;
	$.ajax({
		type: 'GET',
		url: 'php/build.php',
		dataType: 'json',
		success: function (data) {
			initArray = data;
			callback(initArray);
		}
	});
};

function insertHTML(initArray) {
	var numAlbums;
	var numItems;
	var albumName;
	var albumSplit;
	var index = 1;

	numAlbums = parseInt(initArray[0]);

	for (var i = 0 ; i < numAlbums; i++){
		//trim album name
		albumName = initArray[index+1].toString();
		
		albumSplit = albumName.split("/");
		for (var j = 0; j < albumSplit.length; j++){
			albumName = albumSplit[j].toString();
		}
		//append album to gallery
		$(container).append("<" + albumTag + " id=\""+albumName+"\" class=\"" + albumTagClass + "\"> </"+ albumTag + ">");
		
		//update indexes
		numItems = initArray[index];
		
		index = index + 2; 
		//add images to gallery
		for(var k = 0; k < numItems; k++){
			$("#" + albumName).append("<" + itemTag +" src=\"" + initArray[index] + "\" class=\"" + itemClass + "\" />");
			index = index + 1;
		}
	}

	$(container + " " + albumTag + ":first-child").addClass(firstAlbumClass).removeClass(albumTagClass);
	$("." + firstAlbumClass + " " + itemTag + ":first-child").addClass(firstAlbumItemClass).removeClass(itemClass);
};



$(document).ready(getJSON(insertHTML));
