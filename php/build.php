<?php

/* User Settings. 
// Modify $dir to point to the folder you want to load. 
// Remember, heavyLifter can only scan one folder deep. 
// Your main folder can have as many subfolders as you want,
// but those subfolders can't contain any folders.
*/

$dir = "../images/gallery/*";

/* Global Variables */
$itemArray = array();
$reversed = array();
$numItems = 0;
$numFolders = 0;
$index = 3;
$size = 2;
$folder_name = 1;



function main(){
	scan_folder_for_albums();
}

function scan_folder_for_albums(){
    global $itemArray, $size, $numFolders, $numItems, $index, $reversed, $folder_name, $dir;
    
    foreach (glob($dir, GLOB_ONLYDIR) as $folder) {      
        foreach (glob($folder."/*") as $item) {
        $itemArray[$index] = $item;
        $index += 1;
        $numItems += 1;
        }

    $itemArray[$folder_name] = $folder;
    $itemArray[$size] = $numItems;
    
    $index += 3;
    $size = $index - 1;
    $folder_name = $size -1;
    $numItems = 0; 
    $numFolders += 1;                                           
	}
    $itemArray[0] = $numFolders;
    $reversed = array_reverse($itemArray);
}
main();
echo json_encode($reversed);
?> 