import { useState, useEffect } from "react";
import "./App.css"; // Ensure this is correctly importing your CSS file
import CarouselImage1 from "./assets/image.png"; // Example paths to different images
import CarouselImage2 from "./assets/image.png";
import CarouselImage3 from "./assets/image.png";
import CarouselImage4 from "./assets/image.png";
import CarouselImage5 from "./assets/image.png";
import CarouselImage6 from "./assets/dbfce20c05e03ffb24a4554a6af9a8b0.png";
import Sidebar from "./components/Sidebar";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";
import Image4 from "./assets/4.png";
import Logo from "./assets/Logo.png";

function App() {
  // const [sideNavOpen, setSideNavOpen] =useState(false);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 1024);

  const updateScreenSize = () => {
    setIsMdScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const carouselStyle = isMdScreen
    ? { height: "calc(100vh - 5rem)" }
    : { height: "24rem" };

  return (
    <>
      <div>
        <Sidebar />
        <div className="">
          <div
            id="indicators-carousel"
            className="relative w-full"
            data-carousel="static">
            {/* Carousel wrapper */}
            <div
              className="relative  overflow-hidden rounded-lg " //lg:h-calc(100vh - 5rem) h-96
              style={carouselStyle}>
              {/* Item 1 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="active">
                <img
                  src={CarouselImage1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item>
                <img
                  src={CarouselImage2}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 3 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item>
                <img
                  src={CarouselImage3}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 4 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item>
                <img
                  src={CarouselImage4}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 5 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item>
                <img
                  src={CarouselImage5}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"></button>
            </div>
            {/* Slider controls */}
          </div>

          <div className="bg-stone-900 relative">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/d3eb/0473/0832345180f545abf5abe8c3f88a760f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8qKB25y5hoWiMLYpJ4pnZtWRQqbequqGEeEpWwDDu-2osLmulXX7XqkJirxSpgZXCdqjuYqcoJpI5FgtmgwCxHVPrSi0xB~sRjtr~aQC2poHI5LDQJNRa5j-L~c-NQ3iC-E2c3~fdAgjjM6Y8f7WKL1Lfpfc7UuZnR8mQkKNP8w4b-8iobkJvx67qa7RZw-yXEzrDxSM73P2o8v14BH3m0fFIvpWAfEuhXKOs1TGs5cnacWgtBGKcXzsaTGSEEpsULWO9dMpr9aGUIFYsyYcBr9bjKrl5OceUPXPBS5VKCXEqIH0kb63QXLN9jvDNBb4JNWNDF9sQhxUDd0karKHw__"
                className="w-96 md:ml-[20%] -mt-40"
              />

              <div className="md:ml-32 ">
                <h1 className="text-4xl -mt-16 text-yellow-600 mb-6">
                  CHEF MATT PRODUCTS
                </h1>

                <hr className="border-yellow-900  border-4 rounded-sm w-[80%] md:w-[40%] mb-4" />
                <span className="text-white block mb-1">
                  Shop Gourmet Chef Quality products from the Chef Matt brand.
                </span>
                <span className="text-white">
                  Chef it yourself and Thank us later.
                </span>

                <div className="w-full flex my-12 py-12 gap-4 justify-center items-center">
                  <svg
                    className="hidden sm:block"
                    width="76"
                    height="77"
                    viewBox="0 0 76 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M38 19.25L19 38.5L38 57.75"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M57 19.25L38 38.5L57 57.75"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>

                  <div className="lg:gap-12 md:gap-8 gap-4 flex flex-col sm:flex-row">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-48 h-48 rounded-full object-cover"
                        src="https://s3-alpha-sig.figma.com/img/0f71/bcf6/78cc9c121cb54453ef6c8f3a4d71ef47?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-XDfXLgmzbBJrn-gN4QfIizAsRgSwOL9GbNNKVGo1F3aRah6sjP3HYr9lJlzuRLuVAQ8q2ruqGtIUXYOsdZ9KPrVQNyhH4J8UAdecn338-1ipt8IgQx-J-EDJdDpv6DCE7bvF-yUKLybB08WNO6EVsacLoEbHra6k3Y6IO0y2iB63LHt5zaAPMzY1iAlN-xgIAHVwrMJLIbHnEXkWS1MvXcLPcjtF4TNozx7EfvmeEO1no0Sa4uCBu2OY348SrIAnNoW28fnlH-TJmTRr7DbgzEmpU6Xe5gvOkwgJkW5lbvxNnWVVMe41dsK~PGbtrdmM3-fEdJpD9rRPyev0LPQA__"
                        alt="Coconut Oil"
                      />
                      <h1 className="text-yellow-600 text-center text-lg mt-2">
                        COCONUT OIL
                      </h1>
                      <p className="text-white text-sm">$9.00</p>
                    </div>

                    {/* Repeat the block below for the other images */}
                    <div className="flex flex-col items-center w-48">
                      <img
                        className="w-48 h-48 rounded-full object-cover"
                        src="https://s3-alpha-sig.figma.com/img/0f71/bcf6/78cc9c121cb54453ef6c8f3a4d71ef47?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-XDfXLgmzbBJrn-gN4QfIizAsRgSwOL9GbNNKVGo1F3aRah6sjP3HYr9lJlzuRLuVAQ8q2ruqGtIUXYOsdZ9KPrVQNyhH4J8UAdecn338-1ipt8IgQx-J-EDJdDpv6DCE7bvF-yUKLybB08WNO6EVsacLoEbHra6k3Y6IO0y2iB63LHt5zaAPMzY1iAlN-xgIAHVwrMJLIbHnEXkWS1MvXcLPcjtF4TNozx7EfvmeEO1no0Sa4uCBu2OY348SrIAnNoW28fnlH-TJmTRr7DbgzEmpU6Xe5gvOkwgJkW5lbvxNnWVVMe41dsK~PGbtrdmM3-fEdJpD9rRPyev0LPQA__"
                        alt="Coconut Oil"
                      />
                      <h1 className="text-yellow-600 text-center text-lg mt-2">
                        COCONUT OIL
                      </h1>
                      <p className="text-white text-sm">$9.00</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <img
                        className="w-48 h-48 rounded-full object-cover"
                        src="https://s3-alpha-sig.figma.com/img/0f71/bcf6/78cc9c121cb54453ef6c8f3a4d71ef47?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-XDfXLgmzbBJrn-gN4QfIizAsRgSwOL9GbNNKVGo1F3aRah6sjP3HYr9lJlzuRLuVAQ8q2ruqGtIUXYOsdZ9KPrVQNyhH4J8UAdecn338-1ipt8IgQx-J-EDJdDpv6DCE7bvF-yUKLybB08WNO6EVsacLoEbHra6k3Y6IO0y2iB63LHt5zaAPMzY1iAlN-xgIAHVwrMJLIbHnEXkWS1MvXcLPcjtF4TNozx7EfvmeEO1no0Sa4uCBu2OY348SrIAnNoW28fnlH-TJmTRr7DbgzEmpU6Xe5gvOkwgJkW5lbvxNnWVVMe41dsK~PGbtrdmM3-fEdJpD9rRPyev0LPQA__"
                        alt="Coconut Oil"
                      />
                      <h1 className="text-yellow-600 text-center text-lg mt-2">
                        COCONUT OIL
                      </h1>
                      <p className="text-white text-sm">$9.00</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <img
                        className="w-48 h-48 rounded-full object-cover"
                        src="https://s3-alpha-sig.figma.com/img/0f71/bcf6/78cc9c121cb54453ef6c8f3a4d71ef47?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-XDfXLgmzbBJrn-gN4QfIizAsRgSwOL9GbNNKVGo1F3aRah6sjP3HYr9lJlzuRLuVAQ8q2ruqGtIUXYOsdZ9KPrVQNyhH4J8UAdecn338-1ipt8IgQx-J-EDJdDpv6DCE7bvF-yUKLybB08WNO6EVsacLoEbHra6k3Y6IO0y2iB63LHt5zaAPMzY1iAlN-xgIAHVwrMJLIbHnEXkWS1MvXcLPcjtF4TNozx7EfvmeEO1no0Sa4uCBu2OY348SrIAnNoW28fnlH-TJmTRr7DbgzEmpU6Xe5gvOkwgJkW5lbvxNnWVVMe41dsK~PGbtrdmM3-fEdJpD9rRPyev0LPQA__"
                        alt="Coconut Oil"
                      />
                      <h1 className="text-yellow-600 text-center text-lg mt-2">
                        COCONUT OIL
                      </h1>
                      <p className="text-white text-sm">$9.00</p>
                    </div>
                  </div>

                  <svg
                    className=" hidden sm:block"
                    width="76"
                    height="77"
                    viewBox="0 0 76 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M38 19.25L57 38.5L38 57.75"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M19 19.25L38 38.5L19 57.75"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>

                <div
                  id="indicators-carousel"
                  className="relative w-full"
                  data-carousel="static">
                  {/* Carousel wrapper */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item="active">
                      <img
                        src={CarouselImage6}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
                        <h2 className="text-black text-2xl mb-2 md:mb-6">
                          ONLINE ONLY
                        </h2>
                        <div className="w-24 border-t-4 border-black mb-8 lg:mb-16"></div>
                        <p className="md:text-3xl ">
                          GET 20% OFF ON YOUR ORDER $50 OR MORE
                        </p>
                        <p className="md:text-3xl mb-2 md:mb-6">
                          Use Code <span className="font-bold ">"Chef20"</span>
                        </p>
                        <button className="md:py-4 py-2 px-16 lg:px-28 border-2 border-black text-black font-semibold ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item="active">
                      <img
                        src={CarouselImage6}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
                        <h2 className="text-black text-2xl mb-2 md:mb-6">
                          ONLINE ONLY
                        </h2>
                        <div className="w-24 border-t-4 border-black mb-8 lg:mb-16"></div>
                        <p className="md:text-3xl ">
                          GET 20% OFF ON YOUR ORDER $50 OR MORE
                        </p>
                        <p className="md:text-3xl mb-2 md:mb-6">
                          Use Code <span className="font-bold ">"Chef20"</span>
                        </p>
                        <button className="md:py-4 py-2 px-16 lg:px-28 border-2 border-black text-black font-semibold ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item="active">
                      <img
                        src={CarouselImage6}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
                        <h2 className="text-black text-2xl mb-2 md:mb-6">
                          ONLINE ONLY
                        </h2>
                        <div className="w-24 border-t-4 border-black mb-8 lg:mb-16"></div>
                        <p className="md:text-3xl ">
                          GET 20% OFF ON YOUR ORDER $50 OR MORE
                        </p>
                        <p className="md:text-3xl mb-2 md:mb-6">
                          Use Code <span className="font-bold ">"Chef20"</span>
                        </p>
                        <button className="md:py-4 py-2 px-16 lg:px-28 border-2 border-black text-black font-semibold ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    {/* Item 4 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item="active">
                      <img
                        src={CarouselImage6}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
                        <h2 className="text-black text-2xl mb-2 md:mb-6">
                          ONLINE ONLY
                        </h2>
                        <div className="w-24 border-t-4 border-black mb-8 lg:mb-16"></div>
                        <p className="md:text-3xl ">
                          GET 20% OFF ON YOUR ORDER $50 OR MORE
                        </p>
                        <p className="md:text-3xl mb-2 md:mb-6">
                          Use Code <span className="font-bold ">"Chef20"</span>
                        </p>
                        <button className="md:py-4 py-2 px-16 lg:px-28 border-2 border-black text-black font-semibold ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Slider indicators */}
                  <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to="3"></button>
                  </div>
                </div>

                <div className="w-full flex-col my-12">
                  <div className="flex">
                    <img src={Image1} className="w-1/2" />
                    <img src={Image2} className="w-1/2" />
                  </div>
                  <div className="flex">
                    <img src={Image3} className="w-1/2" />
                    <img src={Image4} className="w-1/2" />
                  </div>
                </div>

                <div className="relative h-96">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/5917/02f5/1ae17d362cff488918a26664b4eaf51c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UEWbwayXtoeDAV1RwBJ-8rqmjj-HxCGVjlJfMgmgvIdIPbNYynAIkXwbzoOY4PblcjWH24iUfO6vhqlw2XQfQlo704JY3hzPtqHYWe2D9yn3G3U1DLL2D3hyI9h1KcO3nlCxjfTJ7ve8wyKxuwIdF4PyVpr3Q67HBjO1eGVuxHrv7k4tPJFYl52tOXER5GZeY4dA3vctIFkMtqxsgiAEdSfiSi7njImqm0EOKh9LJo17t8qbMlN-V0a1~KbDnfUtP0Fo0YQBMtK9BMJA4LimjEguFnJn3cIeeWAcM-JEOHwLOCM6L6cUWn0dijRM~AdfHsB7omMpY5W1KvW85GXd7w__"
                    alt="Carousel Image"
                  />
                  <div className="absolute inset-0 flex flex-col mt-[10%] justify-start p-4 pl-12">
                    <h2 className="text-white text-2xl  mb-2">
                      SIGNUP SPECIAL PROMOTIONS
                    </h2>
                    <div className="w-[80%] md:w-[35%] border-t-4 border-white mb-8"></div>
                    <p className="text-lg text-white">
                      Lorem ipsum dolor sit amet impedit molestiae, fuga
                      explicabo autem
                    </p>
                    <div className="mt-8">
                      {" "}
                      <input
                        placeholder="Search..."
                        className="placeholder-black bg-gray-400/50 w-[40%] px-2 py-1 border-2 opacity-30 bg-gray-400 border-white"
                      />
                      <button className="py-1 px-2 ml-2 bg-orange-400 text-white border-2 border-white  font-semibold ">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-12 md:flex  gap-10 border-b-8 border-yellow-700  lg:min-w-[850px]">
                  <div className="flex">
                    <svg
                      className=""
                      width="36"
                      height="33"
                      viewBox="0 0 36 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_1_280" fill="white">
                        <path d="M4 8.8479H0.727273C0.420336 8.8479 0.266867 8.8479 0.160289 8.76812C0.129752 8.74526 0.102643 8.71815 0.0797835 8.68761C0 8.58103 0 8.42756 0 8.12063C0 5.05126 0 3.51657 0.797835 2.45079C1.02643 2.14543 1.29752 1.87433 1.60289 1.64574C2.66867 0.8479 4.20336 0.8479 7.27273 0.8479H28.7273C31.7966 0.8479 33.3313 0.8479 34.3971 1.64574C34.7025 1.87433 34.9736 2.14543 35.2022 2.45079C36 3.51657 36 5.05126 36 8.12063C36 8.42756 36 8.58103 35.9202 8.68761C35.8974 8.71815 35.8702 8.74526 35.8397 8.76812C35.7331 8.8479 35.5797 8.8479 35.2727 8.8479H32V24.8479C32 28.6191 32 30.5048 30.8284 31.6763C29.6569 32.8479 27.7712 32.8479 24 32.8479H12C8.22876 32.8479 6.34315 32.8479 5.17157 31.6763C4 30.5048 4 28.6191 4 24.8479V8.8479Z" />
                      </mask>
                      <path
                        d="M4 6.8479C2.89543 6.8479 2 7.74333 2 8.8479C2 9.95247 2.89543 10.8479 4 10.8479V6.8479ZM32 10.8479C33.1046 10.8479 34 9.95247 34 8.8479C34 7.74333 33.1046 6.8479 32 6.8479V10.8479ZM14 22.8479C12.8954 22.8479 12 23.7433 12 24.8479C12 25.9525 12.8954 26.8479 14 26.8479V22.8479ZM22 26.8479C23.1046 26.8479 24 25.9525 24 24.8479C24 23.7433 23.1046 22.8479 22 22.8479V26.8479ZM32 6.8479H4V10.8479H32V6.8479ZM14 26.8479H22V22.8479H14V26.8479ZM4 8.8479H8V4.8479H4V8.8479ZM32 8.8479V4.8479H28V8.8479H32ZM35.9202 8.68761L39.1224 11.0847V11.0847L35.9202 8.68761ZM35.8397 8.76812L38.2368 11.9703L35.8397 8.76812ZM0.160289 8.76812L-2.23682 11.9703L-2.23682 11.9703L0.160289 8.76812ZM0.0797835 8.68761L-3.12238 11.0847L0.0797835 8.68761ZM34.3971 1.64574L36.7942 -1.55643L34.3971 1.64574ZM35.2022 2.45079L38.4043 0.0536794V0.0536793L35.2022 2.45079ZM1.60289 1.64574L-0.794221 -1.55643H-0.794221L1.60289 1.64574ZM0.797835 2.45079L-2.40433 0.0536793V0.0536794L0.797835 2.45079ZM28 8.8479V24.8479H36V8.8479H28ZM24 28.8479H12V36.8479H24V28.8479ZM8 24.8479V8.8479H0V24.8479H8ZM7.27273 4.8479H28.7273V-3.1521H7.27273V4.8479ZM4 4.8479H0.727273V12.8479H4V4.8479ZM35.2727 4.8479H32V12.8479H35.2727V4.8479ZM32 8.12063C32 8.16111 32 8.18746 31.9999 8.21029C31.9998 8.23248 31.9996 8.24017 31.9996 8.23953C31.9997 8.23897 32 8.22049 32.0017 8.19013C32.0033 8.15993 32.0068 8.10729 32.0143 8.03897C32.043 7.77979 32.1554 7.04216 32.7181 6.2905L39.1224 11.0847C39.7648 10.2265 39.9171 9.35883 39.9657 8.91954C40.0057 8.55819 40 8.18286 40 8.12063H32ZM35.2727 12.8479C35.335 12.8479 35.7103 12.8536 36.0716 12.8136C36.5109 12.765 37.3786 12.6127 38.2368 11.9703L33.4426 5.56595C34.1943 5.00327 34.9319 4.89093 35.1911 4.86223C35.2594 4.85467 35.312 4.8512 35.3422 4.84957C35.3726 4.84792 35.3911 4.84755 35.3916 4.84754C35.3923 4.84753 35.3846 4.84768 35.3624 4.84779C35.3396 4.84789 35.3132 4.8479 35.2727 4.8479V12.8479ZM32.7181 6.2905C32.9238 6.01567 33.1678 5.77169 33.4426 5.56595L38.2368 11.9703C38.5727 11.7188 38.8709 11.4206 39.1224 11.0847L32.7181 6.2905ZM0.727273 4.8479C0.686788 4.8479 0.660439 4.84789 0.637609 4.84779C0.615412 4.84768 0.607726 4.84753 0.608369 4.84754C0.608921 4.84755 0.627405 4.84792 0.657762 4.84957C0.687964 4.8512 0.740597 4.85467 0.808918 4.86223C1.0681 4.89093 1.80574 5.00327 2.5574 5.56595L-2.23682 11.9703C-1.37858 12.6128 -0.51092 12.765 -0.071625 12.8136C0.289714 12.8536 0.665045 12.8479 0.727273 12.8479V4.8479ZM-4 8.12063C-4 8.18286 -4.00574 8.55819 -3.96572 8.91953C-3.91708 9.35882 -3.76485 10.2265 -3.12238 11.0847L3.28195 6.2905C3.84464 7.04216 3.95697 7.7798 3.98567 8.03898C3.99324 8.1073 3.9967 8.15994 3.99833 8.19014C3.99998 8.22049 4.00035 8.23898 4.00036 8.23953C4.00037 8.24017 4.00022 8.23249 4.00011 8.21029C4.00001 8.18746 4 8.16111 4 8.12063H-4ZM2.5574 5.56595C2.83222 5.77168 3.07621 6.01567 3.28195 6.2905L-3.12238 11.0847C-2.87093 11.4206 -2.57272 11.7188 -2.23682 11.9703L2.5574 5.56595ZM28.7273 4.8479C30.3532 4.8479 31.244 4.85364 31.8733 4.92333C32.4246 4.98438 32.2721 5.05156 32 4.8479L36.7942 -1.55643C35.4564 -2.55792 34.0036 -2.88966 32.7538 -3.02807C31.582 -3.15784 30.1707 -3.1521 28.7273 -3.1521V4.8479ZM40 8.12063C40 6.67718 40.0057 5.26594 39.876 4.09409C39.7376 2.84429 39.4058 1.39152 38.4043 0.0536794L32 4.8479C31.7963 4.57584 31.8635 4.42331 31.9246 4.97464C31.9943 5.60392 32 6.4947 32 8.12063H40ZM32 4.8479H32L38.4043 0.0536793C37.9471 -0.557046 37.405 -1.09924 36.7942 -1.55643L32 4.8479ZM7.27273 -3.1521C5.82928 -3.1521 4.41804 -3.15784 3.24619 -3.02807C1.99639 -2.88966 0.54362 -2.55792 -0.794221 -1.55643L4 4.8479C3.72794 5.05156 3.57541 4.98438 4.12674 4.92333C4.75602 4.85364 5.6468 4.8479 7.27273 4.8479V-3.1521ZM4 8.12063C4 6.4947 4.00574 5.60392 4.07543 4.97464C4.13648 4.42331 4.20366 4.57584 4 4.8479L-2.40433 0.0536794C-3.40583 1.39152 -3.73756 2.84429 -3.87597 4.09409C-4.00574 5.26594 -4 6.67718 -4 8.12063H4ZM-0.794221 -1.55643C-1.40495 -1.09924 -1.94714 -0.55705 -2.40433 0.0536793L4 4.8479L-0.794221 -1.55643ZM12 28.8479C10.0013 28.8479 8.90467 28.8394 8.1439 28.7371C7.4982 28.6503 7.71871 28.5666 8 28.8479L2.34315 34.5048C3.79601 35.9576 5.54511 36.4597 7.07792 36.6658C8.49566 36.8564 10.2275 36.8479 12 36.8479V28.8479ZM0 24.8479C0 26.6204 -0.008495 28.3522 0.182115 29.77C0.388196 31.3028 0.890283 33.0519 2.34315 34.5048L8 28.8479C8.28129 29.1292 8.19759 29.3497 8.11078 28.704C8.0085 27.9432 8 26.8466 8 24.8479H0ZM28 24.8479C28 26.8466 27.9915 27.9432 27.8892 28.704C27.8024 29.3497 27.7187 29.1292 28 28.8479L33.6569 34.5048C35.1097 33.0519 35.6118 31.3028 35.8179 29.77C36.0085 28.3522 36 26.6204 36 24.8479H28ZM24 36.8479C25.7725 36.8479 27.5043 36.8564 28.9221 36.6658C30.4549 36.4597 32.204 35.9576 33.6569 34.5048L28 28.8479C28.2813 28.5666 28.5018 28.6503 27.8561 28.7371C27.0953 28.8394 25.9987 28.8479 24 28.8479V36.8479Z"
                        fill="#D29A5A"
                        mask="url(#path-1-inside-1_1_280)"
                      />
                    </svg>
                    <div className="flex flex-col ml-6 ">
                      <h1 className="text-yellow-700 font-semibold block">
                        FREE SHIPPING WORLDWIDE
                      </h1>
                      <p className="text-white">Guaranteed Delivery</p>
                    </div>
                  </div>
                  <div className="flex my-8 md:my-0">
                    <svg
                      className=""
                      width="36"
                      height="33"
                      viewBox="0 0 36 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_1_280" fill="white">
                        <path d="M4 8.8479H0.727273C0.420336 8.8479 0.266867 8.8479 0.160289 8.76812C0.129752 8.74526 0.102643 8.71815 0.0797835 8.68761C0 8.58103 0 8.42756 0 8.12063C0 5.05126 0 3.51657 0.797835 2.45079C1.02643 2.14543 1.29752 1.87433 1.60289 1.64574C2.66867 0.8479 4.20336 0.8479 7.27273 0.8479H28.7273C31.7966 0.8479 33.3313 0.8479 34.3971 1.64574C34.7025 1.87433 34.9736 2.14543 35.2022 2.45079C36 3.51657 36 5.05126 36 8.12063C36 8.42756 36 8.58103 35.9202 8.68761C35.8974 8.71815 35.8702 8.74526 35.8397 8.76812C35.7331 8.8479 35.5797 8.8479 35.2727 8.8479H32V24.8479C32 28.6191 32 30.5048 30.8284 31.6763C29.6569 32.8479 27.7712 32.8479 24 32.8479H12C8.22876 32.8479 6.34315 32.8479 5.17157 31.6763C4 30.5048 4 28.6191 4 24.8479V8.8479Z" />
                      </mask>
                      <path
                        d="M4 6.8479C2.89543 6.8479 2 7.74333 2 8.8479C2 9.95247 2.89543 10.8479 4 10.8479V6.8479ZM32 10.8479C33.1046 10.8479 34 9.95247 34 8.8479C34 7.74333 33.1046 6.8479 32 6.8479V10.8479ZM14 22.8479C12.8954 22.8479 12 23.7433 12 24.8479C12 25.9525 12.8954 26.8479 14 26.8479V22.8479ZM22 26.8479C23.1046 26.8479 24 25.9525 24 24.8479C24 23.7433 23.1046 22.8479 22 22.8479V26.8479ZM32 6.8479H4V10.8479H32V6.8479ZM14 26.8479H22V22.8479H14V26.8479ZM4 8.8479H8V4.8479H4V8.8479ZM32 8.8479V4.8479H28V8.8479H32ZM35.9202 8.68761L39.1224 11.0847V11.0847L35.9202 8.68761ZM35.8397 8.76812L38.2368 11.9703L35.8397 8.76812ZM0.160289 8.76812L-2.23682 11.9703L-2.23682 11.9703L0.160289 8.76812ZM0.0797835 8.68761L-3.12238 11.0847L0.0797835 8.68761ZM34.3971 1.64574L36.7942 -1.55643L34.3971 1.64574ZM35.2022 2.45079L38.4043 0.0536794V0.0536793L35.2022 2.45079ZM1.60289 1.64574L-0.794221 -1.55643H-0.794221L1.60289 1.64574ZM0.797835 2.45079L-2.40433 0.0536793V0.0536794L0.797835 2.45079ZM28 8.8479V24.8479H36V8.8479H28ZM24 28.8479H12V36.8479H24V28.8479ZM8 24.8479V8.8479H0V24.8479H8ZM7.27273 4.8479H28.7273V-3.1521H7.27273V4.8479ZM4 4.8479H0.727273V12.8479H4V4.8479ZM35.2727 4.8479H32V12.8479H35.2727V4.8479ZM32 8.12063C32 8.16111 32 8.18746 31.9999 8.21029C31.9998 8.23248 31.9996 8.24017 31.9996 8.23953C31.9997 8.23897 32 8.22049 32.0017 8.19013C32.0033 8.15993 32.0068 8.10729 32.0143 8.03897C32.043 7.77979 32.1554 7.04216 32.7181 6.2905L39.1224 11.0847C39.7648 10.2265 39.9171 9.35883 39.9657 8.91954C40.0057 8.55819 40 8.18286 40 8.12063H32ZM35.2727 12.8479C35.335 12.8479 35.7103 12.8536 36.0716 12.8136C36.5109 12.765 37.3786 12.6127 38.2368 11.9703L33.4426 5.56595C34.1943 5.00327 34.9319 4.89093 35.1911 4.86223C35.2594 4.85467 35.312 4.8512 35.3422 4.84957C35.3726 4.84792 35.3911 4.84755 35.3916 4.84754C35.3923 4.84753 35.3846 4.84768 35.3624 4.84779C35.3396 4.84789 35.3132 4.8479 35.2727 4.8479V12.8479ZM32.7181 6.2905C32.9238 6.01567 33.1678 5.77169 33.4426 5.56595L38.2368 11.9703C38.5727 11.7188 38.8709 11.4206 39.1224 11.0847L32.7181 6.2905ZM0.727273 4.8479C0.686788 4.8479 0.660439 4.84789 0.637609 4.84779C0.615412 4.84768 0.607726 4.84753 0.608369 4.84754C0.608921 4.84755 0.627405 4.84792 0.657762 4.84957C0.687964 4.8512 0.740597 4.85467 0.808918 4.86223C1.0681 4.89093 1.80574 5.00327 2.5574 5.56595L-2.23682 11.9703C-1.37858 12.6128 -0.51092 12.765 -0.071625 12.8136C0.289714 12.8536 0.665045 12.8479 0.727273 12.8479V4.8479ZM-4 8.12063C-4 8.18286 -4.00574 8.55819 -3.96572 8.91953C-3.91708 9.35882 -3.76485 10.2265 -3.12238 11.0847L3.28195 6.2905C3.84464 7.04216 3.95697 7.7798 3.98567 8.03898C3.99324 8.1073 3.9967 8.15994 3.99833 8.19014C3.99998 8.22049 4.00035 8.23898 4.00036 8.23953C4.00037 8.24017 4.00022 8.23249 4.00011 8.21029C4.00001 8.18746 4 8.16111 4 8.12063H-4ZM2.5574 5.56595C2.83222 5.77168 3.07621 6.01567 3.28195 6.2905L-3.12238 11.0847C-2.87093 11.4206 -2.57272 11.7188 -2.23682 11.9703L2.5574 5.56595ZM28.7273 4.8479C30.3532 4.8479 31.244 4.85364 31.8733 4.92333C32.4246 4.98438 32.2721 5.05156 32 4.8479L36.7942 -1.55643C35.4564 -2.55792 34.0036 -2.88966 32.7538 -3.02807C31.582 -3.15784 30.1707 -3.1521 28.7273 -3.1521V4.8479ZM40 8.12063C40 6.67718 40.0057 5.26594 39.876 4.09409C39.7376 2.84429 39.4058 1.39152 38.4043 0.0536794L32 4.8479C31.7963 4.57584 31.8635 4.42331 31.9246 4.97464C31.9943 5.60392 32 6.4947 32 8.12063H40ZM32 4.8479H32L38.4043 0.0536793C37.9471 -0.557046 37.405 -1.09924 36.7942 -1.55643L32 4.8479ZM7.27273 -3.1521C5.82928 -3.1521 4.41804 -3.15784 3.24619 -3.02807C1.99639 -2.88966 0.54362 -2.55792 -0.794221 -1.55643L4 4.8479C3.72794 5.05156 3.57541 4.98438 4.12674 4.92333C4.75602 4.85364 5.6468 4.8479 7.27273 4.8479V-3.1521ZM4 8.12063C4 6.4947 4.00574 5.60392 4.07543 4.97464C4.13648 4.42331 4.20366 4.57584 4 4.8479L-2.40433 0.0536794C-3.40583 1.39152 -3.73756 2.84429 -3.87597 4.09409C-4.00574 5.26594 -4 6.67718 -4 8.12063H4ZM-0.794221 -1.55643C-1.40495 -1.09924 -1.94714 -0.55705 -2.40433 0.0536793L4 4.8479L-0.794221 -1.55643ZM12 28.8479C10.0013 28.8479 8.90467 28.8394 8.1439 28.7371C7.4982 28.6503 7.71871 28.5666 8 28.8479L2.34315 34.5048C3.79601 35.9576 5.54511 36.4597 7.07792 36.6658C8.49566 36.8564 10.2275 36.8479 12 36.8479V28.8479ZM0 24.8479C0 26.6204 -0.008495 28.3522 0.182115 29.77C0.388196 31.3028 0.890283 33.0519 2.34315 34.5048L8 28.8479C8.28129 29.1292 8.19759 29.3497 8.11078 28.704C8.0085 27.9432 8 26.8466 8 24.8479H0ZM28 24.8479C28 26.8466 27.9915 27.9432 27.8892 28.704C27.8024 29.3497 27.7187 29.1292 28 28.8479L33.6569 34.5048C35.1097 33.0519 35.6118 31.3028 35.8179 29.77C36.0085 28.3522 36 26.6204 36 24.8479H28ZM24 36.8479C25.7725 36.8479 27.5043 36.8564 28.9221 36.6658C30.4549 36.4597 32.204 35.9576 33.6569 34.5048L28 28.8479C28.2813 28.5666 28.5018 28.6503 27.8561 28.7371C27.0953 28.8394 25.9987 28.8479 24 28.8479V36.8479Z"
                        fill="#D29A5A"
                        mask="url(#path-1-inside-1_1_280)"
                      />
                    </svg>
                    <div className="flex flex-col ml-6 ">
                      <h1 className="text-yellow-700 font-semibold block">
                        FREE SHIPPING WORLDWIDE
                      </h1>
                      <p className="text-white">Guaranteed Delivery</p>
                    </div>
                  </div>
                  <div className="flex">
                    <svg
                      className=""
                      width="36"
                      height="33"
                      viewBox="0 0 36 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_1_280" fill="white">
                        <path d="M4 8.8479H0.727273C0.420336 8.8479 0.266867 8.8479 0.160289 8.76812C0.129752 8.74526 0.102643 8.71815 0.0797835 8.68761C0 8.58103 0 8.42756 0 8.12063C0 5.05126 0 3.51657 0.797835 2.45079C1.02643 2.14543 1.29752 1.87433 1.60289 1.64574C2.66867 0.8479 4.20336 0.8479 7.27273 0.8479H28.7273C31.7966 0.8479 33.3313 0.8479 34.3971 1.64574C34.7025 1.87433 34.9736 2.14543 35.2022 2.45079C36 3.51657 36 5.05126 36 8.12063C36 8.42756 36 8.58103 35.9202 8.68761C35.8974 8.71815 35.8702 8.74526 35.8397 8.76812C35.7331 8.8479 35.5797 8.8479 35.2727 8.8479H32V24.8479C32 28.6191 32 30.5048 30.8284 31.6763C29.6569 32.8479 27.7712 32.8479 24 32.8479H12C8.22876 32.8479 6.34315 32.8479 5.17157 31.6763C4 30.5048 4 28.6191 4 24.8479V8.8479Z" />
                      </mask>
                      <path
                        d="M4 6.8479C2.89543 6.8479 2 7.74333 2 8.8479C2 9.95247 2.89543 10.8479 4 10.8479V6.8479ZM32 10.8479C33.1046 10.8479 34 9.95247 34 8.8479C34 7.74333 33.1046 6.8479 32 6.8479V10.8479ZM14 22.8479C12.8954 22.8479 12 23.7433 12 24.8479C12 25.9525 12.8954 26.8479 14 26.8479V22.8479ZM22 26.8479C23.1046 26.8479 24 25.9525 24 24.8479C24 23.7433 23.1046 22.8479 22 22.8479V26.8479ZM32 6.8479H4V10.8479H32V6.8479ZM14 26.8479H22V22.8479H14V26.8479ZM4 8.8479H8V4.8479H4V8.8479ZM32 8.8479V4.8479H28V8.8479H32ZM35.9202 8.68761L39.1224 11.0847V11.0847L35.9202 8.68761ZM35.8397 8.76812L38.2368 11.9703L35.8397 8.76812ZM0.160289 8.76812L-2.23682 11.9703L-2.23682 11.9703L0.160289 8.76812ZM0.0797835 8.68761L-3.12238 11.0847L0.0797835 8.68761ZM34.3971 1.64574L36.7942 -1.55643L34.3971 1.64574ZM35.2022 2.45079L38.4043 0.0536794V0.0536793L35.2022 2.45079ZM1.60289 1.64574L-0.794221 -1.55643H-0.794221L1.60289 1.64574ZM0.797835 2.45079L-2.40433 0.0536793V0.0536794L0.797835 2.45079ZM28 8.8479V24.8479H36V8.8479H28ZM24 28.8479H12V36.8479H24V28.8479ZM8 24.8479V8.8479H0V24.8479H8ZM7.27273 4.8479H28.7273V-3.1521H7.27273V4.8479ZM4 4.8479H0.727273V12.8479H4V4.8479ZM35.2727 4.8479H32V12.8479H35.2727V4.8479ZM32 8.12063C32 8.16111 32 8.18746 31.9999 8.21029C31.9998 8.23248 31.9996 8.24017 31.9996 8.23953C31.9997 8.23897 32 8.22049 32.0017 8.19013C32.0033 8.15993 32.0068 8.10729 32.0143 8.03897C32.043 7.77979 32.1554 7.04216 32.7181 6.2905L39.1224 11.0847C39.7648 10.2265 39.9171 9.35883 39.9657 8.91954C40.0057 8.55819 40 8.18286 40 8.12063H32ZM35.2727 12.8479C35.335 12.8479 35.7103 12.8536 36.0716 12.8136C36.5109 12.765 37.3786 12.6127 38.2368 11.9703L33.4426 5.56595C34.1943 5.00327 34.9319 4.89093 35.1911 4.86223C35.2594 4.85467 35.312 4.8512 35.3422 4.84957C35.3726 4.84792 35.3911 4.84755 35.3916 4.84754C35.3923 4.84753 35.3846 4.84768 35.3624 4.84779C35.3396 4.84789 35.3132 4.8479 35.2727 4.8479V12.8479ZM32.7181 6.2905C32.9238 6.01567 33.1678 5.77169 33.4426 5.56595L38.2368 11.9703C38.5727 11.7188 38.8709 11.4206 39.1224 11.0847L32.7181 6.2905ZM0.727273 4.8479C0.686788 4.8479 0.660439 4.84789 0.637609 4.84779C0.615412 4.84768 0.607726 4.84753 0.608369 4.84754C0.608921 4.84755 0.627405 4.84792 0.657762 4.84957C0.687964 4.8512 0.740597 4.85467 0.808918 4.86223C1.0681 4.89093 1.80574 5.00327 2.5574 5.56595L-2.23682 11.9703C-1.37858 12.6128 -0.51092 12.765 -0.071625 12.8136C0.289714 12.8536 0.665045 12.8479 0.727273 12.8479V4.8479ZM-4 8.12063C-4 8.18286 -4.00574 8.55819 -3.96572 8.91953C-3.91708 9.35882 -3.76485 10.2265 -3.12238 11.0847L3.28195 6.2905C3.84464 7.04216 3.95697 7.7798 3.98567 8.03898C3.99324 8.1073 3.9967 8.15994 3.99833 8.19014C3.99998 8.22049 4.00035 8.23898 4.00036 8.23953C4.00037 8.24017 4.00022 8.23249 4.00011 8.21029C4.00001 8.18746 4 8.16111 4 8.12063H-4ZM2.5574 5.56595C2.83222 5.77168 3.07621 6.01567 3.28195 6.2905L-3.12238 11.0847C-2.87093 11.4206 -2.57272 11.7188 -2.23682 11.9703L2.5574 5.56595ZM28.7273 4.8479C30.3532 4.8479 31.244 4.85364 31.8733 4.92333C32.4246 4.98438 32.2721 5.05156 32 4.8479L36.7942 -1.55643C35.4564 -2.55792 34.0036 -2.88966 32.7538 -3.02807C31.582 -3.15784 30.1707 -3.1521 28.7273 -3.1521V4.8479ZM40 8.12063C40 6.67718 40.0057 5.26594 39.876 4.09409C39.7376 2.84429 39.4058 1.39152 38.4043 0.0536794L32 4.8479C31.7963 4.57584 31.8635 4.42331 31.9246 4.97464C31.9943 5.60392 32 6.4947 32 8.12063H40ZM32 4.8479H32L38.4043 0.0536793C37.9471 -0.557046 37.405 -1.09924 36.7942 -1.55643L32 4.8479ZM7.27273 -3.1521C5.82928 -3.1521 4.41804 -3.15784 3.24619 -3.02807C1.99639 -2.88966 0.54362 -2.55792 -0.794221 -1.55643L4 4.8479C3.72794 5.05156 3.57541 4.98438 4.12674 4.92333C4.75602 4.85364 5.6468 4.8479 7.27273 4.8479V-3.1521ZM4 8.12063C4 6.4947 4.00574 5.60392 4.07543 4.97464C4.13648 4.42331 4.20366 4.57584 4 4.8479L-2.40433 0.0536794C-3.40583 1.39152 -3.73756 2.84429 -3.87597 4.09409C-4.00574 5.26594 -4 6.67718 -4 8.12063H4ZM-0.794221 -1.55643C-1.40495 -1.09924 -1.94714 -0.55705 -2.40433 0.0536793L4 4.8479L-0.794221 -1.55643ZM12 28.8479C10.0013 28.8479 8.90467 28.8394 8.1439 28.7371C7.4982 28.6503 7.71871 28.5666 8 28.8479L2.34315 34.5048C3.79601 35.9576 5.54511 36.4597 7.07792 36.6658C8.49566 36.8564 10.2275 36.8479 12 36.8479V28.8479ZM0 24.8479C0 26.6204 -0.008495 28.3522 0.182115 29.77C0.388196 31.3028 0.890283 33.0519 2.34315 34.5048L8 28.8479C8.28129 29.1292 8.19759 29.3497 8.11078 28.704C8.0085 27.9432 8 26.8466 8 24.8479H0ZM28 24.8479C28 26.8466 27.9915 27.9432 27.8892 28.704C27.8024 29.3497 27.7187 29.1292 28 28.8479L33.6569 34.5048C35.1097 33.0519 35.6118 31.3028 35.8179 29.77C36.0085 28.3522 36 26.6204 36 24.8479H28ZM24 36.8479C25.7725 36.8479 27.5043 36.8564 28.9221 36.6658C30.4549 36.4597 32.204 35.9576 33.6569 34.5048L28 28.8479C28.2813 28.5666 28.5018 28.6503 27.8561 28.7371C27.0953 28.8394 25.9987 28.8479 24 28.8479V36.8479Z"
                        fill="#D29A5A"
                        mask="url(#path-1-inside-1_1_280)"
                      />
                    </svg>
                    <div className="flex flex-col ml-6 ">
                      <h1 className="text-yellow-700 font-semibold block">
                        FREE SHIPPING WORLDWIDE
                      </h1>
                      <p className="text-white">Guaranteed Delivery</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center -mt-12 ">
                  <img src={Logo} className="ml-[20%] mr-[28%] " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
