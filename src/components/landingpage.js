import React from "react";
import photo1 from "../assets/gallery1.jpg";
import "tw-elements";
import "flowbite";
function Landingpage() {
  return (
    <>
      <div class="h-screen w-full overflow-hidden">
        <video
          class="h-screen w-screen absolute object-cover brightness-50"
          src="https://assets.mixkit.co/videos/preview/mixkit-boutique-hotel-room-and-terrace-4047-large.mp4"
          autoPlay
          loop
          muted
        />
        <div class="relative w-1/2  mx-auto top-1/3 ">
          <h1 class=" text-xl font-bold text-yellow-300  ">Oyasumi.com</h1>
          <h1 class="text-4xl  md:text-5xl font-bold text-white leading-tight">
            Pilihan Tempat tidur Nyamanmu Ada di Oyasumi.com
          </h1>
          <button
            type="button"
            class="text-white bg-yellow-300 mt-6 text-xl hover:bg-yellow-500 focus:outline-none ofocus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Booking Now!
          </button>
        </div>
      </div>

    

      <div class="py-20 w-full flex flex-col items-start gap-6 justify-center  font-Quicksand text-xl bg-black text-white">
        <div class=" mx-auto bg-yellow-300 rounded-full px-6 py-1 flex items-center gap-2">
          <h1 class="font-bold text-2xl text-black">What is Oyasumi.com</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2829/2829066.png"
            class="w-12 h-12"
          />
        </div>

        <div class="flex flex-col items-center justify-center center w-3/4  mx-auto my-6 gap-10">
          {/* <div
            id="carouselExampleCaptions"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover"
                  style={{ backgroundPosition: "50%" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg"
                    className="block w-full"
                  />
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50" />
                </div>
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover"
                  style={{ backgroundPosition: "50%" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg"
                    className="block w-full"
                  />
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50" />
                </div>
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover"
                  style={{ backgroundPosition: "50%" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg"
                    className="block w-full"
                  />
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50" />
                </div>
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          <img src={photo1} class="rounded-3xl" />
          <p class="my-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <div class=" mx-auto bg-yellow-300 rounded-full px-6 py-1 flex items-center gap-2">
          <h1 class="font-bold text-2xl text-black">Why Oyasumi.com</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2829/2829066.png"
            class="w-12 h-12"
          />
        </div>

        <div class="flex w-3/4 mx-auto gap-11 justify-center mt-7">
          <div class="flex flex-col  items-center">
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-review-social-media-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              class="w-32 h-32"
            />
            <h1>Review</h1>
          </div>
          <div class="flex flex-col  items-center ">
            <img
              src="https://img.icons8.com/arcade/64/FFFFFF/experimental-banknotes-arcade.png"
              class="w-32 h-32"
            />
            <h1>Murah</h1>
          </div>
          <div class="flex flex-col  items-center">
            <img
              src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-fast-customer-services-wanicon-lineal-color-wanicon.png"
              class="w-32 h-32"
            />
            <h1>Booking Cepat</h1>
          </div>
        </div>
      </div>

      <div class=" w-full  gap-2 p-10 font-Quicksand flex flex-col items-center bg-black text-white justify-center">
        <div class="flex items-center justify-center my-9">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2829/2829066.png"
            className=" h-6 sm:h-9"
            alt="Oyasumi.com"
          />
          <h1 class="text-2xl py-2.5 px-1 text-center   rounded-full font-bold">
            Oyasumi.com partnered hotels
          </h1>
        </div>

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

        <button
          type="button"
          class=" my-10 text-black border border-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 bg-yellow-400 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          More...
        </button>
      </div>
      <div class="container py-24 px-6 mx-auto bg-black text-white">
        <section class="mb-32 text-white text-center">
          <h2 class="text-3xl font-bold mb-12">Testimonials</h2>

          <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            <div class="mb-12 md:mb-0">
              <div class="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  class="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
              <h6 class="font-medium text-blue-600 mb-4">Web Developer</h6>
              <p class="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  class="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <ul class="flex justify-center mb-0">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star-half-alt"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 536 512"
                  >
                    <path
                      fill="currentColor"
                      d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                  class="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 class="text-lg font-bold mb-4">Lisa Cudrow</h5>
              <h6 class="font-medium text-blue-600 mb-4">Graphic Designer</h6>
              <p class="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  class="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul class="flex justify-center mb-0">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-0">
              <div class="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  class="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 class="text-lg font-bold mb-4">John Smith</h5>
              <h6 class="font-medium text-blue-600 mb-4">
                Marketing Specialist
              </h6>
              <p class="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  class="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul class="flex justify-center mb-0">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section class=" pb-10 lg:pb-20 bg-black text-white">
        <div class="container">
          <div class="flex flex-wrap ">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] max-w-[510px]">
                <span class="font-semibold text-lg text-primary mb-2 block">
                  Our Team
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Awesome Team
                </h2>
                <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center ">
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div class="max-w-[370px] w-full mx-auto mb-10">
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="absolute w-full bottom-5 left-0 text-center text-black">
                    <div
                      class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                    >
                      <h3 class="text-base font-semibold text-dark">
                        Coriss Ambady
                      </h3>
                      <p class="text-sm text-body-color">Web Developer</p>
                      <div>
                        <span class="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fill-opacity="0.11"
                            />
                          </svg>
                        </span>
                        <span class="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div class="max-w-[370px] w-full mx-auto mb-10">
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="absolute w-full bottom-5 left-0 text-center text-black">
                    <div
                      class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                    >
                      <h3 class="text-base font-semibold text-dark">
                        Glorius Cristian
                      </h3>
                      <p class="text-sm text-body-color">App Developer</p>
                      <div>
                        <span class="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fill-opacity="0.11"
                            />
                          </svg>
                        </span>
                        <span class="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div class="max-w-[370px] w-full mx-auto mb-10">
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="absolute w-full bottom-5 left-0 text-center text-black">
                    <div
                      class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                    >
                      <h3 class="text-base font-semibold text-dark">
                        Jackie Sanders
                      </h3>
                      <p class="text-sm text-body-color">UI/UX Designer</p>
                      <div>
                        <span class="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fill-opacity="0.11"
                            />
                          </svg>
                        </span>
                        <span class="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div class="max-w-[370px] w-full mx-auto mb-10">
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="absolute w-full bottom-5 left-0 text-center text-black">
                    <div
                      class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                    >
                      <h3 class="text-base font-semibold text-dark">
                        Nikolas Brooten
                      </h3>
                      <p class="text-sm text-body-color">Sales Manager</p>
                      <div>
                        <span class="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fill-opacity="0.11"
                            />
                          </svg>
                        </span>
                        <span class="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
