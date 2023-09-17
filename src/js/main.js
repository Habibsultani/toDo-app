const addbtn = document.getElementById("addbtn");
const inputTodo = document.getElementById("TO_DO");
const container = document.getElementById("OL_RENDER");
const donebtn = document.getElementById("DONE");
const paraError = document.getElementById("paraErr");
const inputErr = document.getElementById("error-inp");

addbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const newTodo = inputTodo.value;
  console.log(newTodo);
  if (inputTodo.value === "") {
    // alert("Please write someting...");
    inputErr.classList.remove("hidden");

    return;
  }
  paraError.classList.add("hidden");
  inputErr.classList.add("hidden");

  const li = document.createElement("li");
  li.className = "flex justify-between";

  const h3 = document.createElement("h3");
  h3.textContent = newTodo;

  const doneButton = document.createElement("button");
  doneButton.className = "bg-orange-800 text-white py-0.5 px-2 rounded-xl";
  doneButton.textContent = "pending";

  doneButton.addEventListener("click", function () {
    // Change the value of the list item here
    doneButton.classList.add("done");
    doneButton.textContent = "Done ✓"; // You can set any new value here
  });

  li.appendChild(h3);
  li.appendChild(doneButton);

  container.appendChild(li);

  // Clear the input field after adding the new item
  inputTodo.value = "";
});

// const html = `
//     <li class="flex justify-between">
//       <h3>${newTodo}</h3>
//       <button id="DONE" class="bg-red-900 text-white py-0.5 px-2 rounded-xl">
//           pending
//       </button>
//     </li>
// `;
// container.insertAdjacentHTML("beforeend", html);
// });

// donebtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   donebtn.classList.add("done");
//   donebtn.textContent = "✅ Done ";
// });

// const addbtn = document.getElementById("addbtn");
// const inputTodo = document.getElementById("TO_DO");
// const container = document.getElementById("OL_RENDER");

// addbtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const newTodo = inputTodo.value;
//   console.log(newTodo);
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `
//       <div class="flex justify-between">
//         <h3>${newTodo}</h3>
//         <button class="task-button bg-red-900 text-white py-0.5 px-2 rounded-xl">
//             Mark as Done
//         </button>
//       </div>
//   `;
//   container.appendChild(listItem);

//   // Add a click event listener to the "Mark as Done" button for this to-do item
//   const markDoneButton = listItem.querySelector(".task-button");
//   markDoneButton.addEventListener("click", function () {
//     // Add the "done" class to the parent <li> element to style it as done
//     listItem.classList.add("done");
//     // Change the button text to indicate it's done
//     markDoneButton.textContent = "Done ✓";
//   });

//   // Clear the input field
//   inputTodo.value = "";
// });
