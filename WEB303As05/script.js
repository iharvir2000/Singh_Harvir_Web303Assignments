/*
    Assignment 05
    Harvir Singh
*/

$(document).ready(function () {
    // Define the ContentItem class
    class ContentItem {
      constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
      }
  
      // Method to update ContentItem properties
      updateContentItem(id, name, description, category) {
        if (id === this.id) {
          if (name !== null) this.name = name;
          if (description !== null) this.description = description;
          if (category !== null) this.category = category;
        }
      }
  
      // Method to generate HTML for displaying the content item
      toString() {
        return `
          <div class="content-item-wrapper" id="content-item-${this.id}">
              <h2>${this.name}</h2>
              <p>${this.description}</p>
              <div>${this.category}</div>
          </div>
        `;
      }
    }
  
    // Create an array of 5 content items with a theme
    const contentItems = [
      new ContentItem(0, "Item 1", "Description 1", "Category 1"),
      new ContentItem(1, "Item 2", "Description 2", "Category 2"),
      new ContentItem(2, "Item 3", "Description 3", "Category 3"),
      new ContentItem(3, "Item 4", "Description 4", "Category 4"),
      new ContentItem(4, "Item 5", "Description 5", "Category 5"),
    ];
  
    const $contentList = $('#content-item-list');
  
    // Append each content item to the content list
    contentItems.forEach(item => {
      $contentList.append(item.toString());
    });
  
    // Apply styling to content item wrappers using jQuery
    $('.content-item-wrapper').css({
      border: '1px solid #000',
      width: '300px',
      padding: '10px',
      margin: '10px auto',
    });
  
    // Bonus: Add event listeners to the buttons for updating content items
    $('#successful-update').click(function () {
      // Update ContentItem successfully
      contentItems[0].updateContentItem(0, "New Name", null, "New Category");
      // Re-render the updated item
      $contentList.empty();
      contentItems.forEach(item => {
        $contentList.append(item.toString());
      });
    });
  
    $('#unsuccessful-update').click(function () {
      // Try to update ContentItem unsuccessfully
      contentItems[1].updateContentItem(0, "Invalid Name", "Invalid Description", "Invalid Category");
      // Re-render the items (no changes should occur)
      $contentList.empty();
      contentItems.forEach(item => {
        $contentList.append(item.toString());
      });
    });
  });
  