import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="static">
      <header className="body-font fixed  mt-5 w-full text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center rounded-full bg-white p-5 shadow-lg md:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900 uppercase">About</a>
            <a className="mr-5 hover:text-gray-900 uppercase">Resume</a>
            <a className="mr-5 hover:text-gray-900 uppercase">Portfolio</a>
            <a className="mr-5 hover:text-gray-900 uppercase">Contact</a>
          </nav>
          <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-[repeat(20,_minmax(0,_1fr))]">
        <div className="col-span-8 bg-gray-700">a</div>
        <div className="col-span-11">
          <section className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
              <Image
                className="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6"
                alt="hero"
                src="https://dummyimage.com/720x600"
                width={600}
                height={720}
              />
              <div className="w-full text-center lg:w-2/3">
                <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                  Microdosing synth tattooed vexillologist
                </h1>
                <p className="mb-8 leading-relaxed">
                  Meggings kinfolk echo park stumptown DIY, kale chips beard
                  jianbing tousled. Chambray dreamcatcher trust fund, kitsch
                  vice godard disrupt ramps hexagon mustache umami snackwave
                  tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled
                  ennui celiac mlkshk freegan photo booth af fingerstache
                  pitchfork.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                    Button
                  </button>
                  <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <div className="mb-20 flex w-full flex-wrap">
                <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                  <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                    Pitchfork Kickstarter Taxidermy
                  </h1>
                  <div className="h-1 w-20 rounded bg-indigo-500"></div>
                </div>
                <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven&apos;t heard of them man bun deep jianbing
                  selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div className="-m-4 flex flex-wrap">
                <div className="p-4 md:w-1/2 xl:w-1/2">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src="https://dummyimage.com/720x400"
                      alt="content"
                      height={403}
                      width={723}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      Chichen Itza
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 xl:w-1/2">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src="https://dummyimage.com/721x401"
                      alt="content"
                      height={403}
                      width={723}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      Colosseum Roma
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-m-4 flex flex-wrap">
                <div className="p-4 md:w-1/2 xl:w-1/2">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src="https://dummyimage.com/720x400"
                      alt="content"
                      height={403}
                      width={723}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      Chichen Itza
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 xl:w-1/2">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src="https://dummyimage.com/721x401"
                      alt="content"
                      height={403}
                      width={723}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      Colosseum Roma
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-m-4 flex flex-wrap">
                <div className="p-4 md:w-1/2 xl:w-1/2">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src="https://dummyimage.com/720x400"
                      alt="content"
                      height={403}
                      width={723}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      Chichen Itza
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 xl:w-1/2">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src="https://dummyimage.com/721x401"
                      alt="content"
                      height={403}
                      width={723}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      Colosseum Roma
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-1 border-l">a</div>
      </div>
    </div>
  );
};

export default Page;
