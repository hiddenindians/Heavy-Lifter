# Heavy-Lifter
Heavy Lifter scans a a set of folders for content and then inserts that content into your webpage as HTML.
#Limitations
Heavy Lifter can only scan folders nested one level. Your folder can contain as many subfolders as you want, but none of those can contain any of their own subfolders.
##Dependancies
Heavy Lifter depends on JQuery 1.11.X

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
- Update the variables in build.php and heavy-lifter.js to suit your needs.

###heavy-lifter.js settings
| variable | purpose |
| -------- | ------- |
| albumTag | Defines the type of HTML tag to use for the folders. |
| itemTag  | Sets the type of HTML tag to use for the items. |
| itemClass | Sets a class for the items. |
| albumTagClass | Sets a class for the folders. |
| containerID | The id of the element you want to contain the generated HTML. |
| firstAlbumClass | Sets a unique class name for the first folder. |
| firstAlbumItemClass | Sets a unique class name for the first item in the first folder. |

###build.php settings

| variable | purpose | 
| -------- | ------- |
| $dir    | Sets the directory containing the folders to scan.
