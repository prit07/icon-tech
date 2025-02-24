$(document).ready(function () {
  $('.tabs li').click(function () {
    $('.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');
    var tid = $(this).attr('tab');
    $(this).addClass('active');
    $('#' + tid).addClass('active');
  });


  $(".nav-item-custom p").click(function () {
    $(".left-list-li .sub-menu-cu").not($(this).parents(".left-list-li").find(".sub-menu-cu")).hide();
    $(this).parents(".left-list-li").find(".sub-menu-cu").toggle();
  });
  


  $("#multiple").select2({
    placeholder: "Select Job Title",
    allowClear: true,
});

$("#Managment").select2({
    placeholder: "Management Level",
    allowClear: true,
});

$("#Company").select2({
  placeholder: "Enter companies...",
  allowClear: true,
});

$("#Contact").select2({
  placeholder: "Enter Location...",
  allowClear: true,
});

$("#Account").select2({
  placeholder: "Enter companies...",
  allowClear: true,
});

$("#Industry").select2({
  placeholder: "Enter companies...",
  allowClear: true,
});





$("#multiple1").select2({
  placeholder: "Select Job Title",
  allowClear: true,
});

$("#Managment1").select2({
  placeholder: "Management Level",
  allowClear: true,
});

$("#Company1").select2({
placeholder: "Enter companies...",
allowClear: true,
});

$("#Contact1").select2({
placeholder: "Enter Location...",
allowClear: true,
});

$("#Account1").select2({
placeholder: "Enter companies...",
allowClear: true,
});

$("#Industry1").select2({
placeholder: "Enter companies...",
allowClear: true,
});


});












function showTab(tabElement, tabId) {
  const dropdownContainer = tabElement.closest('.dropdown-container');
  const tabs = dropdownContainer.querySelectorAll('.tab');
  const options = dropdownContainer.querySelectorAll('.dropdown-options');

  tabs.forEach(tab => tab.classList.remove('active'));
  tabElement.classList.add('active');
  options.forEach(option => option.style.display = option.getAttribute('data-tab') === tabId ? 'block' : 'none');
}



// // Toggle dropdown visibility
// function toggleDropdown(selectedElement) {
//   const dropdownContainer = selectedElement.closest('.dropdown-container');
//   const optionsContainer = dropdownContainer.querySelector('.dropdown-options-container');

//   // Close all other open dropdowns
//   document.querySelectorAll('.dropdown-options-container').forEach(container => {
//     if (container !== optionsContainer) {
//       container.classList.remove('open');
//     }
//   });

//   // Toggle the 'open' class for the current dropdown
//   optionsContainer.classList.toggle('open');
// }

// // Update selection when a checkbox is clicked
// function updateSelection(checkbox) {
//   const dropdownContainer = checkbox.closest('.dropdown-container');
//   const selectedItemsContainer = dropdownContainer.querySelector('.selected-items');
//   const value = checkbox.value;

//   if (checkbox.checked) {
//     // Add selected item to the selected area
//     const selectedItem = document.createElement('div');
//     selectedItem.classList.add('selected-item');
//     selectedItem.setAttribute('data-value', value);
//     selectedItem.innerHTML = `${value} <span class="remove-item" onclick="removeItem(this, '${value}')">X</span>`;
//     selectedItemsContainer.appendChild(selectedItem);
//   } else {
//     // Remove the item if unchecked
//     removeSelectedItem(value, dropdownContainer);
//   }
// }

// // Remove an item from the selected area
// function removeItem(element, value) {
//   const dropdownContainer = element.closest('.dropdown-container');
//   removeSelectedItem(value, dropdownContainer);

//   // Uncheck the corresponding checkbox
//   const checkbox = dropdownContainer.querySelector(`input[type="checkbox"][value="${value}"]`);
//   if (checkbox) checkbox.checked = false;
// }

// // Remove the selected item by value
// function removeSelectedItem(value, dropdownContainer) {
//   const selectedItemsContainer = dropdownContainer.querySelector('.selected-items');
//   const selectedItem = selectedItemsContainer.querySelector(`.selected-item[data-value="${value}"]`);
//   if (selectedItem) {
//     selectedItemsContainer.removeChild(selectedItem);
//   }
// }

// // Filter dropdown options based on search input
// function filterOptions(input) {
//   const filter = input.value.toLowerCase();
//   const dropdownContainer = input.closest('.dropdown-container');
//   const options = dropdownContainer.querySelectorAll('.dropdown-options-container label');

//   options.forEach(option => {
//     const text = option.textContent.toLowerCase();
//     option.style.display = text.includes(filter) ? 'flex' : 'none';
//   });
// }

// // Prevent dropdown toggle when typing in the input box
// function stopPropagation(event) {
//   event.stopPropagation();
// }

// // Open dropdown when the input field is focused
// function openDropdownOnFocus(inputElement) {
//   const dropdownContainer = inputElement.closest('.dropdown-container');
//   const optionsContainer = dropdownContainer.querySelector('.dropdown-options-container');

//   // Open the dropdown by adding the 'open' class
//   optionsContainer.classList.add('open');
// }

// // Close dropdown when clicking outside
// window.onclick = function (event) {
//   const dropdowns = document.querySelectorAll('.dropdown-options-container');
//   dropdowns.forEach(container => {
//     if (!container.contains(event.target) && !container.previousElementSibling.contains(event.target)) {
//       container.classList.remove('open');
//     }
//   });
// };






// Toggle dropdown visibility
function toggleDropdown(selectedElement) {
  const dropdownContainer = selectedElement.closest('.dropdown-container');
  const optionsContainer = dropdownContainer.querySelector('.dropdown-options-container');

  // Close all other open dropdowns
  document.querySelectorAll('.dropdown-options-container').forEach(container => {
    if (container !== optionsContainer) {
      container.classList.remove('open');
    }
  });

  // Toggle the 'open' class for the current dropdown
  optionsContainer.classList.toggle('open');
}

// Update selection when a checkbox is clicked
function updateSelection(checkbox) {
  const dropdownContainer = checkbox.closest('.dropdown-container');
  const selectedItemsContainer = dropdownContainer.querySelector('.selected-items');
  const value = checkbox.value;

  if (checkbox.checked) {
    // Add selected item to the selected area
    const selectedItem = document.createElement('div');
    selectedItem.classList.add('selected-item');
    selectedItem.setAttribute('data-value', value);
    selectedItem.innerHTML = `${value} <span class="remove-item" onclick="removeItem(this, '${value}')"></span>`;
    selectedItemsContainer.appendChild(selectedItem);
  } else {
    // Remove the item if unchecked
    removeSelectedItem(value, dropdownContainer);
  }

  toggleCloseButton(selectedItemsContainer);
}

// Toggle the close button visibility
function toggleCloseButton(selectedItemsContainer) {
  let closeButton = selectedItemsContainer.querySelector('.clear-all');
  if (!closeButton) {
    closeButton = document.createElement('button');
    closeButton.classList.add('clear-all');
    closeButton.textContent = 'X';
    closeButton.onclick = () => clearAllItems(selectedItemsContainer);
    selectedItemsContainer.appendChild(closeButton);
  }

  // Show or hide the close button based on the selected items
  const hasItems = selectedItemsContainer.querySelectorAll('.selected-item').length > 0;
  closeButton.style.display = hasItems ? 'inline-block' : 'none';
}

// Remove an item from the selected area
function removeItem(element, value) {
  const dropdownContainer = element.closest('.dropdown-container');
  removeSelectedItem(value, dropdownContainer);

  // Uncheck the corresponding checkbox
  const checkbox = dropdownContainer.querySelector(`input[type="checkbox"][value="${value}"]`);
  if (checkbox) checkbox.checked = false;

  const selectedItemsContainer = dropdownContainer.querySelector('.selected-items');
  toggleCloseButton(selectedItemsContainer);
}

// Remove the selected item by value
function removeSelectedItem(value, dropdownContainer) {
  const selectedItemsContainer = dropdownContainer.querySelector('.selected-items');
  const selectedItem = selectedItemsContainer.querySelector(`.selected-item[data-value="${value}"]`);
  if (selectedItem) {
    selectedItemsContainer.removeChild(selectedItem);
  }
}

// Clear all selected items
function clearAllItems(selectedItemsContainer) {
  selectedItemsContainer.querySelectorAll('.selected-item').forEach(item => item.remove());
  selectedItemsContainer.closest('.dropdown-container')
    .querySelectorAll('input[type="checkbox"]').forEach(checkbox => (checkbox.checked = false));

  toggleCloseButton(selectedItemsContainer);
}

// Filter dropdown options based on search input
function filterOptions(input) {
  const filter = input.value.toLowerCase();
  const dropdownContainer = input.closest('.dropdown-container');
  const options = dropdownContainer.querySelectorAll('.dropdown-options-container label');

  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    option.style.display = text.includes(filter) ? 'flex' : 'none';
  });
}

// Prevent dropdown toggle when typing in the input box
function stopPropagation(event) {
  event.stopPropagation();
}

// Open dropdown when the input field is focused
function openDropdownOnFocus(inputElement) {
  const dropdownContainer = inputElement.closest('.dropdown-container');
  const optionsContainer = dropdownContainer.querySelector('.dropdown-options-container');

  // Open the dropdown by adding the 'open' class
  optionsContainer.classList.add('open');
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  const dropdowns = document.querySelectorAll('.dropdown-options-container');
  dropdowns.forEach(container => {
    if (!container.contains(event.target) && !container.previousElementSibling.contains(event.target)) {
      container.classList.remove('open');
    }
  });
};



document.addEventListener("DOMContentLoaded", function () {
  const rangeTypeRadios = document.querySelectorAll('input[name="range-type"]');
  const customRangeDiv = document.querySelector(".custom-range");
  const predefinedRanges = document.querySelector(".predefined-ranges");

  // Show/hide sections based on selected range type
  rangeTypeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "custom") {
        customRangeDiv.classList.remove("hidden");
        predefinedRanges.style.display = "none";
      } else if (this.value === "predefined") {
        customRangeDiv.classList.add("hidden");
        predefinedRanges.style.display = "block";
      } else {
        // For "unknown" selection
        customRangeDiv.classList.add("hidden");
        predefinedRanges.style.display = "none";
      }
    });
  });
});





