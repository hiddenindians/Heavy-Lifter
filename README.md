# Heavy-Lifter
Heavy Lifter scans a set of folders for content and then inserts that content into your webpage as HTML.
##Limitations
- Heavy Lifter currently only supports tags that make use of the 'src' attribute.
- Heavy Lifter can only scan folders nested one level deep. Your folder can contain as many sub-folders as you want, but none of those can contain any of their own sub-folders.

##Dependancies
Heavy Lifter depends on JQuery 1.11.X

##Example
Given a folder that contains X amount of sub-folders that each contain X amount of images, heavy-lifter would insert those folders and their contents into your HTML like this:
```HTML
<div id="#gallery" class="heavy-lifter">
  <album id="folder1" class="active-album">
    <img src="../images/gallery/folder1/img1.jpg" class="active-photo"/>
    <img src="../images/gallery/folder1/img2.jpg" class="photo"/>
    <img src="../images/gallery/folder1/img3.jpg" class="photo"/>
    ...
    <img src="../images/gallery/folder1/imgX.jpg" class="photo"/>
  </album>
  <album id="folder2" class="album">
    <img src="../images/gallery/folder2/img1.jpg" class="photo"/>
    <img src="../images/gallery/folder2/img2.jpg" class="photo"/>
    <img src="../images/gallery/folder2/img3.jpg" class="photo"/>
    ...
    <img src="../images/gallery/folder2/imgX.jpg" class="photo"/>
  </album>
  <album id="folder2" class="album">
    <img src="../images/gallery/folder3/img1.jpg" class="photo"/>
    <img src="../images/gallery/folder3/img2.jpg" class="photo"/>
    <img src="../images/gallery/folder3/img3.jpg" class="photo"/>
    ...
    <img src="../images/gallery/folder3/imgX.jpg" class="photo"/>
  </album>
  ...
  <album id="folderX" class="album">
    <img src="../images/gallery/folderX/img1.jpg" class="photo"/>
    <img src="../images/gallery/folderX/img2.jpg" class="photo"/>
    <img src="../images/gallery/folderX/img3.jpg" class="photo"/>
    ...
    <img src="../images/gallery/folderX/imgX.jpg" class="photo"/>
  </album>
</div>
```

##Usage

- Add heavy-lifter.js to your /js folder and build.php to your /php folder. 
- Add heavy-lifter to your HTML's head
```HTML
<head>
  ...
  <script type="text/javascript" src="js/heavy-lifter.js"></script>
  ...
</head>
```
- Add heavy-lifter to the class of whichever element you want the HTML inserted to.

```HTML
...
<div id="container" class="heavy-lifter">
...
```


###heavy-lifter.js settings
| variable | purpose |
| -------- | ------- |
| albumTag | Defines the type of HTML tag to use for the folders. |
| itemTag  | Sets the type of HTML tag to use for the items. |
| itemClass | Sets a class for the items. |
| albumTagClass | Sets a class for the folders. |
| container | The id or class of the element you want to contain the generated HTML. By default this is set to .heavy-lifter|
| firstAlbumClass | Sets a unique class name for the first folder. |
| firstAlbumItemClass | Sets a unique class name for the first item in the first folder. |

###build.php settings

| variable | purpose | 
| -------- | ------- |
| $dir    | Sets the directory containing the folders to scan. |
