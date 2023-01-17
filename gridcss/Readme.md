# CSS GRID
### What is grid layout?
###### :-> CSS Grid Layout very good at dividing a page into major areas or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.Like tables, grid layout enables an user to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

### Elements in Grid?
###### :-> Grid----
######     Grid lines
######     Grid tracks
######     Grid cell
######     Grid area
######     Gutters
######     Grid axis
######     Grid row
######     Grid column

### GRID TRACKS?
###### :-> A grid track is the space between two adjacent grid lines. They are defined in the explicit grid by using the grid-template-columns and grid-template-rows properties or the shorthand grid or grid-template properties. Tracks are also created in the implicit grid by positioning a grid item outside of the tracks created in the explicit grid.

### GRID LINES?
###### :-> Grid lines are created when you define tracks in the explicit grid using CSS Grid Layout.

### GRID CELL?
###### :-> In a CSS Grid Layout, a grid cell is the smallest unit you can have on your CSS grid. It is the space between four intersecting grid lines and conceptually much like a table cell.

### GRID AREA?
###### :-> A grid area is one or more grid cells that make up a rectangular area on the grid. Grid areas are created when you place an item using line-based placement or when defining areas using named grid areas.Grid areas must be rectangular in nature; it is not possible to create, for example, a T- or L-shaped grid area.

### GRID AXIS?
###### :-> CSS Grid Layout is a two-dimensional layout method enabling the laying out of content in rows and columns. Therefore in any grid we have two axes. The block or column axis, and the inline or row axis.It is along these axes that items can be aligned and justified using the properties defined in the Box Alignment specification.In CSS the block or column axis is the axis used when laying out blocks of text. If you have two paragraphs and are working in a right to left, top to bottom language they lay out one below the other, on the block axis.

### GRID ROW?
###### :-> A grid row is a horizontal track in a CSS Grid Layout, that is the space between two horizontal grid lines. It is defined by the grid-template-rows property or in the shorthand grid or grid-template properties.In addition, rows may be created in the implicit grid when items are placed outside of rows created in the explicit grid. These rows will be auto sized by default, or can have a size specified with the grid-auto-rows property.When working with alignment in CSS Grid Layout, the axis along which rows run is known as the inline, or row, axis.


### GRID COLUMN?
###### :-> A grid column is a vertical track in a CSS Grid Layout, and is the space between two vertical grid lines. It is defined by the grid-template-columns property or in the shorthand grid or grid-template properties.In addition, columns may be created in the implicit grid when items are placed outside of columns created in the explicit grid. These columns will be auto-sized by default, or can have a size specified with the grid-auto-columns property.When working with alignment in CSS Grid Layout, the axis down which columns run is known as the block, or column, axis.

### GUTTERS?
###### :-> Gutters or alleys are spacing between content tracks. These can be created in CSS Grid Layout using the column-gap, row-gap, or gap properties.


## QUE. When to use Grids, When to use flexes in at least 100 words?
##### :-> To understand when to use GRid and Flex we need to know about why we use them. 
##### GRID's:- 01. Grids Keep Your Content Organized
##### 02. Collaborating With Other Designers Will Be Much Easier
##### 03. Balancing Your Design Will Get Significantly Easier
##### 04. Grids Will Enhance Your Visual Hierarchy
##### 05. You Can Break the Grid For Extra Impact


##### FLEX's :- 01.can be laid out in any flow direction (leftwards, rightwards, downwards, or even upwards!)
##### 02. can have display order reversed or rearranged at the style layer (i.e., visual order can be independent of source and speech order)
##### 03. can be laid out linearly along a single (main) axis or wrapped into multiple lines along a secondary (cross) axis
##### 04. can “flex” their sizes to respond to the available space
##### 05. can be aligned with respect to their container or each other
##### 06. can be dynamically collapsed or uncollapsed along the main axis while preserving the container’s cross size.

##### Let’s look at some layout and understand how a grid is suitable for this type of layout instead of flex.

##### Demo :

![DEMO !](https://blog.yudiz.com/wp-content/uploads/2021/07/grid-example-1.png)

##### Here in this example we can see our structure is reversible structure means element 1, 2, 3 is set to left to right and element 4, 5, 6 is set right to left it means every (6n+4), (6n+5), (6n+6) nth-child elements are set inverse (right to left).

##### Looking at this structure we can guess that it would be better if we use the grid to easily create this kind of structure as it provides flexible ways to position the element like grid-column-start: position; grid-column-end:position; grid-column-start property sets the element at starting position and grid-column-end property sets the element at ending position.

##### Our example we have 3 column structure

##### so if we write
##### :nth-child(6n+4) { grid-column-start: 3; grid-column-end: 3;} every 4th element sets at the last position (for ex. block 4).

##### and if we write
##### :nth-child(6n+5) { grid-column-start: 2; grid-column-end: 2;} every 5th element sets at the second position (for ex. block 5).

##### and if we write
##### :nth-child(6n+6) { grid-column-start: 1; grid-column-end: 1;} every 6th element sets at the first position (for ex. block 6).

##### why we used grid instead of flex in this example
##### because in our layout every 4th, 5th, and 6th element is set in reverse order so using grid property grid-column-start and grid-column-end so easily change the position of blocks. If we use flex, we have to use the order property of flex, so we have to apply order in all elements so it becomes more complex and dynamically added data disturbs the order. That’s why the grid is more flexible instead of flex in this layout.


##### when to you use flex
##### Let’s look at some layout and understand how flex is suitable for this type of layout instead of grid.

##### Demo  :
![DEMO!](https://blog.yudiz.com/wp-content/uploads/2021/07/flex-example-1.png)

##### In this example we can see we have a layout of blocks. All blocks width is divided into 3 means 100% / 3 of parent width except the last element, because we add one property flex-grow:1; Using this we can make our element grow to the full space of the parent.

##### If you see the layout our last element (4th) element is full width because there are no any sibling elements. If we have elements like 5th and 6th then 4th, 5th and 6th elements also divided into 3.

##### why we used flex instead of grid in this example
##### Here in this example we have used the flex property. If we use grid instead of flex then also it will work but only when our layout is static. In this example our layout is not fixed its dynamic. So when we have this type of requirement that means to grow the content based on element then we have to use flex because flex gives a one property whose name is flex-grow. Using flex-grow we can grow the element to the rest of the parent element width. If we use a grid , the grid has no option to grow the element.