let categoriesContainer = document.querySelector("#categories-container");
var categoryNumber = 1;
let map = [0, 1];

function addCategory() {
  categoryNumber++;
  map.push(1);
  console.log(map);
  const newCategory = `
  <div class="border-2 rounded-md border-gray-400 mt-10 px-5 py-3">
    <div id="category-${categoryNumber}">
      <div class="relative z-0 w-full mb-10 group">

        <input
        type="Text"
        name="category-heading-${categoryNumber}"
        id="category-heading-${categoryNumber}"
        class="block py-2.5 px-0 w-full text-lg text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
        placeholder=" "
        required
        />

        <label
        for="category-heading-${categoryNumber}"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Category Name</label
        >

      </div>
        
      <div class="grid grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full sm:w-1/2  group">
          <input
            type="text"
            name="item-${categoryNumber}-1"
            id="item-${categoryNumber}-1"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
            placeholder=" "
            required
          />

          <label
          for="item-${categoryNumber}-1"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Item name
          </label>


        </div>

      <div class="relative z-0 w-full sm:w-1/2 group">
        <input
        type="number"
        name="price-${categoryNumber}-1"
        id="price-${categoryNumber}-1"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
        placeholder=" "
        required
        />

        <label
          for="price-${categoryNumber}-1"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >price</label
          >

      </div>
    </div>
  </div>
  <button
    type="button"
    id=${categoryNumber}
    onclick="addItem(this)"
    class="text-white mt-6 bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-blue-800"
    >
    Add Item
  </button>`;

  const newCat=document.createElement('div');
  newCat.innerHTML =newCategory;
  console.log(categoryNumber);
  categoriesContainer.appendChild(newCat);
}

function addItem(btn) {
  const catNo = parseInt(btn.id);
  console.log(catNo);
  map[catNo]++;
  console.log(map);
  const newItemDiv=document.createElement("div");
  const newItem = `
  <div class="grid grid-cols-2 md:gap-6">
    <div class="mt-5 relative z-0 w-full sm:w-1/2  group">
      <input
        type="text"
        name="item-${catNo}-${map[catNo]}"
        id="item-${catNo}-${map[catNo]}"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
        placeholder=" "
        required
      />
      <label
        for="item-${catNo}-${map[catNo]}"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Item name
      </label>
    </div>
  <div class="relative z-0 w-full sm:w-1/2  group">
    <input
      type="number"
      name="price-${catNo}-${map[catNo]}"
      id="price-${catNo}-${map[catNo]}"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
      placeholder=" "
      required
    />
    <label
      for="price-${catNo}-${map[catNo]}"
      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >price
    </label>
  </div>
</div>`;
newItemDiv.innerHTML=newItem;

  document.querySelector("#category-" + catNo).appendChild(newItemDiv);
  console.log(document.querySelector("#category-" + catNo));
}
