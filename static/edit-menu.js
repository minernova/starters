const categoryContainer = document.querySelector("#categories-container");

function addCategory(btn) {
  let catNo =
    btn.previousElementSibling.lastElementChild.lastElementChild.firstElementChild.id.substring(
      9,
      11
    );
  console.log(categoryContainer);
  console.log(
    btn.previousElementSibling.lastElementChild.lastElementChild
      .firstElementChild
  );
  catNo = parseInt(catNo) + 1;
  let newcategory = `<div
    class="font-medium mt-6 inline opacity-90 hover:opacity-100 hover:cursor-pointer hover:text-red-600">
  <span onclick="removeCategory(this)"> remove </span>
</div>
<div class="border-2 rounded-md border-gray-400  px-5 py-3">
  <div id="category-${catNo}" class="py-5">
    <div class="relative  z-0 w-full mb-10 group">
      <input
        type="Text"
        name="category-heading-${catNo}"
        id="category-heading-${catNo}"
        class="block py-2.5 px-0 w-full text-lg text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
        required
      />
      <label
        for="category-heading-${catNo}"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Category Name</label
      >
    </div>
    <div class="none"> 
        <div class="grid grid-cols-5 gap-2 mt-4 sm:gap-4">
          <div class="relative col-span-2 z-0  group">
            <input
            type="text"
            name="item-${catNo}-0"
            id="item-${catNo}-0"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            required
            />
            <label
            for="item-${catNo}-0"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Item name</label
            >
          </div>
          <div class="relative col-span-2 z-0  group">
            <input
            type="number"
            name="price-${catNo}-0"
            id="price-${catNo}-0"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            
            required />
            
            <label
            for="price-${catNo}-0"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >price</label>
          </div>
          <span class="col-span-1 mt-auto mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-auto hover:text-red-600 hover:cursor-pointer inline"
                      onclick="deleteItem(this)"
                      height="20"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                      id="delete-${catNo}-0"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        id="mainIconPathAttribute"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        id="mainIconPathAttribute"
                      ></path>
                    </svg>
                  </span>
        </div>
    
    </div>
  </div>

  <button
    type="button"
    id="${catNo}"
    onclick="addItem(this)"
    class="text-white mt-6 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-blue-800"
  >
    Add Item
  </button>
    </div>`;

  let toAdd = document.createElement("div");
  toAdd.className = "mt-8";
  toAdd.innerHTML = newcategory;
  categoryContainer.appendChild(toAdd);
}

function addItem(btn) {
  let catDiv = btn.previousElementSibling;
  // console.log(catDiv);
  const catNo = catDiv.id.substring(9, 10);
  console.log(catDiv.lastElementChild.lastElementChild.firstElementChild);
  const itemNo =
    parseInt(
      catDiv.lastElementChild.lastElementChild.firstElementChild.firstElementChild.id.substring(
        7,
        8
      )
    ) + 1;
  console.log(catNo);

  const newItem = `
    <div class="grid grid-cols-5 gap-2 mt-4 sm:gap-4">
    <div class="relative z-0  col-span-2 group">
      <input
        type="text"
        name="item-${catNo}-${itemNo}"
        id="item-${catNo}-${itemNo}"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-red-600 peer"
        required
      />
      <label
        for="item-${catNo}-${itemNo}"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Item name</label
      >
    </div>
    <div class="relative z-0 col-span-2 group">
      <input
        type="number"
        name="price-${catNo}-${itemNo}"
        id="price-${catNo}-${itemNo}"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-red-600 peer"
        required />
      
      <label
        for="price-${catNo}-${itemNo}"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >price</label>
    </div>
    <span class="col-span-1 mt-auto mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-auto hover:text-red-600 hover:cursor-pointer inline"
                      onclick="deleteItem(this)"
                      height="20"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                      id="delete-${catNo}-${itemNo}"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        id="mainIconPathAttribute"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        id="mainIconPathAttribute"
                      ></path>
                    </svg>
                  </span>
  </div>
  
    `;
  let toAdd = document.createElement("div");
  toAdd.innerHTML = newItem;
  catDiv.appendChild(toAdd);
}

function removeCategory(btn) {
  toRemove = btn.parentElement.parentElement;
  console.log(toRemove);
  if (toRemove.id != "dontRemove") toRemove.remove();
}

function deleteItem(btn) {
  toRemove =btn.parentElement.parentElement.parentElement;
  itemNo=toRemove.firstElementChild.firstElementChild.firstElementChild.id.substring(7,8)
  console.log(toRemove);
  console.log(itemNo);
  
  if (itemNo != "0") toRemove.remove();
}