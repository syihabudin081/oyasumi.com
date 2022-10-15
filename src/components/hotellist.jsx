import React from 'react'
import "flowbite";
function Hotellist() {
  return (
    <>
<form>
  <div className="flex">
    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
    <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden data-popper-escaped data-popper-placement="bottom" style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate3d(0px, 345.6px, 0px)'}}>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
        </li>
        <li>
          <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
        </li>
      </ul>
    </div>
    <div className="relative w-full">
      <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
      <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  </div>
</form>
 <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 mb-6 text-black ">
          <div class="mx-2 max-w-sm bg-white rounded-lg shadow-md  dark:bg-gray-800 dark:border-black ">
            <div class="flex justify-end px-4 pt-4"></div>
            <div class="flex flex-col justify-center items-center pb-10">
              <img
                class="mb-3 w-fit h-64  shadow-lg object-contain"
                src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000967-25a41477d959774f3759e84eb91806a5.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl   text-gray-900 dark:text-white">
                Eastpark Hotel
              </h5>
              <span class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {/* {res.company_name}  */}
              </span>

              <div class="flex flex-wrap  sm:text-sm text-xs gap-2">
                <div class="flex self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    class="h-6 w-6"
                  />
                  <p class="font-bold  ">Available</p>
                </div>
                <div class="flex  self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                    class="h-6 w-6"
                  />
                  <p>5</p>
                </div>
                <div class="flex self-start gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Kledokan</p>
                </div>
              </div>
              <h1 class="text-center mt-4">
                starts from{" "}
                <h1 class="text-red-500 font-extrabold">Rp 788.976</h1>
              </h1>
              <div class="flex flex-col mt-4 space-x-3 ">
                <button
                  to="/detail_job"
                  //   value={res.id}
                  //   onClick={handleDetail}
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Booking
                </button>
              </div>
            </div>
          </div>
          <div class="mx-2 max-w-sm bg-slate-50 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
            <div class="flex justify-end px-4 pt-4"></div>
            <div class="flex flex-col justify-center items-center pb-10">
              <img
                class="mb-3  w-fit h-64  shadow-lg object-contain"
                src="https://pix10.agoda.net/hotelImages/21667665/0/d254f46dd472d988aed094597f7c2c42.jpg?ca=20&ce=1&s=1024x768"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl   text-gray-900 dark:text-white">
                Ibis Hotel
              </h5>
              <span class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {/* {res.company_name}  */}
              </span>

              <div class="flex flex-wrap  sm:text-sm text-xs gap-2">
                <div class="flex self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    class="h-6 w-6"
                  />
                  <p class="font-bold  ">Available</p>
                </div>
                <div class="flex  self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                    class="h-6 w-6"
                  />
                  <p>5</p>
                </div>
                <div class="flex self-start gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Kledokan</p>
                </div>
              </div>
              <h1 class="text-center mt-4">
                starts from{" "}
                <h1 class="text-red-500 font-extrabold">Rp 788.976</h1>
              </h1>
              <div class="flex flex-col mt-4 space-x-3 ">
                <button
                  to="/detail_job"
                  //   value={res.id}
                  //   onClick={handleDetail}
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Booking
                </button>
              </div>
            </div>
          </div>
          <div class="mx-2 max-w-sm bg-slate-50 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
            <div class="flex justify-end px-4 pt-4"></div>
            <div class="flex flex-col justify-center items-center pb-10">
              <img
                class="mb-3 w-fit h-64    shadow-lg object-fill"
                src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/royal-ambarrukmo-yogyakarta.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl   text-gray-900 dark:text-white">
                Hotel Ambarrukmo
              </h5>
              <span class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {/* {res.company_name}  */}
              </span>

              <div class="flex flex-wrap  sm:text-sm text-xs gap-2">
                <div class="flex self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    class="h-6 w-6"
                  />
                  <p class="font-bold  ">Available</p>
                </div>
                <div class="flex  self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                    class="h-6 w-6"
                  />
                  <p>5</p>
                </div>
                <div class="flex self-start gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Kledokan</p>
                </div>
              </div>
              <h1 class="text-center mt-4">
                starts from{" "}
                <h1 class="text-red-500 font-extrabold">Rp 788.976</h1>
              </h1>
              <div class="flex flex-col mt-4 space-x-3 ">
                <button
                  to="/detail_job"
                  //   value={res.id}
                  //   onClick={handleDetail}
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Booking
                </button>
              </div>
            </div>
          </div>
          <div class="mx-2 max-w-sm bg-slate-50 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
            <div class="flex justify-end px-4 pt-4"></div>
            <div class="flex flex-col justify-center items-center pb-10">
              <img
                class="mb-3 w-fit h-64     shadow-lg object-contain"
                src="https://pix10.agoda.net/hotelImages/3155660/-1/f7324019939936504c77e3924e206f4f.jpg?ca=9&ce=1&s=1024x768"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl   text-gray-900 dark:text-white">
                Diana Hotel
              </h5>
              <span class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {/* {res.company_name}  */}
              </span>

              <div class="flex flex-wrap  sm:text-sm text-xs gap-2">
                <div class="flex self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    class="h-6 w-6"
                  />
                  <p class="font-bold  ">Available</p>
                </div>
                <div class="flex  self-start gap-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                    class="h-6 w-6"
                  />
                  <p>5</p>
                </div>
                <div class="flex self-start gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Kledokan</p>
                </div>
              </div>
              <h1 class="text-center mt-4">
                starts from{" "}
                <h1 class="text-red-500 font-extrabold">Rp 788.976</h1>
              </h1>
              <div class="flex flex-col mt-4 space-x-3 ">
                <button
                  to="/detail_job"
                  //   value={res.id}
                  //   onClick={handleDetail}
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Booking
                </button>
              </div>
            </div>
          </div>
        </div>
</>
  )
}

export default Hotellist