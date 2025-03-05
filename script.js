// // Store items in localStorage
// let items = JSON.parse(localStorage.getItem('items')) || [];

// // Handle login form submission
// function handleLogin(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Simple validation (in real app, this would be a server request)
//     if (username === 'admin' && password === 'password') {
//         window.location.href = 'list.html';
//     } else {
//         alert('Invalid credentials!');
//     }
// }

// // Add new item
// function addItem() {
//     const itemName = document.getElementById('itemName').value.trim();
//     if (itemName) {
//         items.push(itemName);
//         localStorage.setItem('items', JSON.stringify(items));
//         renderItems();
//         document.getElementById('itemName').value = '';
//         const modal = bootstrap.Modal.getInstance(document.getElementById('addItemModal'));
//         modal.hide();
//     }
// }

// // Delete item
// function deleteItem(index) {
//     items.splice(index, 1);
//     localStorage.setItem('items', JSON.stringify(items));
//     renderItems();
// }

// // Render items list
// function renderItems() {
//     const itemList = document.getElementById('itemList');
//     if (!itemList) return; // Exit if we're not on the list page

//     const searchInput = document.getElementById('searchInput');
//     const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

//     const filteredItems = items.filter(item =>
//         item.toLowerCase().includes(searchTerm)
//     );

//     itemList.innerHTML = filteredItems.map((item, index) => `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             ${item}
//             <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">
//                 <i class="bi bi-trash"></i>
//             </button>
//         </li>
//     `).join('');
// }

// // Add search functionality
// if (document.getElementById('searchInput')) {
//     document.getElementById('searchInput').addEventListener('input', renderItems);
//     // Initial render
//     renderItems();
// }