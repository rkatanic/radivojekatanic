import PixelCard from "./ui/PixelCard/PixelCard";

const TechnologiesSection = () => (
  <section>
    <div className="flex flex-col items-center justify-center gap-4 border border-t-0 px-6 py-16 text-center sm:px-16 sm:py-20">
      <h2 className="max-w-md flex-auto text-3xl font-semibold tracking-[-0.015em] text-balance">
        Most frequent technologies and frameworks I use.
      </h2>
      <div className="mt-4 max-w-2xl flex-auto lg:mt-0">
        <div className="text-muted-foreground space-y-4 text-base/relaxed text-balance">
          I use trusted, proven tools and frameworks as part of my regular
          workflow. I am mainly front-end oriented with backend knowledge too.
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 divide-x divide-y border-l md:grid-cols-5">
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="2500"
            width="2183"
            viewBox="0 0 124 141.53199999999998"
            className="text-primary size-10"
          >
            <path
              d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#e34f26]"
            />
            <path
              d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#ef652a]"
            />
            <path
              d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
              className="fill-background"
            />
          </svg>
          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            HTML
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="2500"
            width="2183"
            viewBox="0 0 124 141.53"
            className="text-primary size-10"
          >
            <path
              d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#1b73ba]"
            />
            <path
              d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#1c88c7]"
            />
            <path
              d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
              fill="currentColor"
              className="fill-background"
            />
          </svg>
          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            CSS
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 400 400"
            width="100"
            height="100"
            className="text-primary fill-background size-10 group-hover/canvas-card:text-[#007acc]"
          >
            <path d="M0 200V0h400v400H0" fill="currentColor" />
            <path d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" />
          </svg>
          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            TypeScript
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            className="text-primary"
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="42"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M63.054 37.67A19.907 19.907 0 0 1 52 41c-11.046 0-20-8.954-20-20S40.954 1 52 1s20 8.954 20 20c0 6-2.643 11.384-6.828 15.05l-4.95-6.407V13h-2.666v13.19L47.365 13H44v15.993h2.692V16.42L63.054 37.67Z"
              clipRule="evenodd"
            />
            <path
              fillOpacity=".4"
              fillRule="evenodd"
              d="M63.054 37.67A19.907 19.907 0 0 1 52 41c-11.046 0-20-8.954-20-20S40.954 1 52 1s20 8.954 20 20c0 6-2.643 11.384-6.828 15.05l-4.95-6.407V13h-2.666v13.19L47.365 13H44v15.993h2.692V16.42L63.054 37.67Z"
              clipRule="evenodd"
            />
            <defs>
              <linearGradient
                id="paint0_linear_485_6386"
                x1="52"
                x2="52"
                y1="1"
                y2="41"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset=".775" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            Next.js
          </h2>
        </div>
      </PixelCard>

      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="42"
            fill="none"
            className="text-primary"
          >
            <path
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#61DAFB]"
              fillRule="evenodd"
              d="M61.023 5.37c1.497.865 2.338 3.203 1.965 6.896-.022.217-.048.437-.078.66a34.32 34.32 0 0 0-5.576-1.165 34.327 34.327 0 0 0-3.797-4.246c.178-.138.355-.27.532-.398 3.011-2.17 5.457-2.61 6.954-1.747ZM52 6.18c-.3-.241-.601-.47-.9-.686-3.123-2.25-6.52-3.358-9.124-1.855-2.602 1.502-3.341 5-2.954 8.828.037.367.085.742.143 1.123-.359.14-.707.286-1.044.438-3.51 1.579-6.169 3.967-6.169 6.972 0 3.006 2.66 5.394 6.169 6.973.336.152.684.297 1.043.438-.058.38-.106.755-.143 1.122-.387 3.83.352 7.326 2.955 8.829 2.602 1.503 6 .394 9.123-1.856.3-.216.6-.444.9-.685.302.24.602.47.902.685 3.122 2.25 6.52 3.359 9.123 1.856 2.603-1.503 3.341-5 2.954-8.829a22.206 22.206 0 0 0-.143-1.123c.359-.14.707-.285 1.044-.437 3.51-1.58 6.168-3.967 6.168-6.973 0-3.005-2.659-5.393-6.168-6.973a22.168 22.168 0 0 0-1.044-.437c.058-.381.105-.756.143-1.123.387-3.83-.352-7.326-2.955-8.829-2.603-1.502-6-.394-9.123 1.856-.3.216-.6.444-.9.685Zm0 2.637c-.86.79-1.72 1.69-2.565 2.687a43.462 43.462 0 0 1 5.13 0A30.273 30.273 0 0 0 52 8.817Zm-5.335 2.944c-1.999.255-3.876.651-5.575 1.166a19.9 19.9 0 0 1-.078-.661c-.373-3.692.468-6.031 1.964-6.895 1.497-.865 3.943-.424 6.954 1.746.177.127.355.26.533.398a34.327 34.327 0 0 0-3.798 4.246Zm-1.608 2.27a43.487 43.487 0 0 0-2.563 4.44c-.44-1.229-.79-2.424-1.045-3.562a30.261 30.261 0 0 1 3.608-.877ZM43.51 21a40.639 40.639 0 0 1 1.932-3.785 40.679 40.679 0 0 1 2.312-3.566 40.69 40.69 0 0 1 4.246-.22c1.464 0 2.885.077 4.245.22a40.684 40.684 0 0 1 2.312 3.567 40.659 40.659 0 0 1 1.933 3.784 40.681 40.681 0 0 1-1.934 3.787 40.688 40.688 0 0 1-2.312 3.567 40.67 40.67 0 0 1-4.244.219c-1.464 0-2.885-.076-4.245-.22a40.694 40.694 0 0 1-2.312-3.566 40.672 40.672 0 0 1-1.933-3.787Zm-2.179 0a34.324 34.324 0 0 1-1.778-5.41c-.209.085-.412.173-.612.262-3.384 1.523-4.989 3.421-4.989 5.15 0 1.728 1.605 3.625 4.99 5.148.198.09.402.177.61.263.404-1.73 1-3.553 1.78-5.413Zm.117 6.093a30.23 30.23 0 0 1 1.046-3.565 43.528 43.528 0 0 0 2.564 4.442 30.26 30.26 0 0 1-3.61-.877Zm-.359 1.982c-.03.223-.056.443-.078.66-.373 3.693.468 6.032 1.965 6.896 1.496.864 3.942.423 6.953-1.747.178-.127.355-.26.534-.398a34.32 34.32 0 0 1-3.797-4.246c-2-.255-3.877-.65-5.577-1.165Zm12.447 5.411c.179.138.357.271.534.399 3.011 2.17 5.457 2.61 6.954 1.746 1.497-.864 2.338-3.203 1.965-6.895a19.91 19.91 0 0 0-.079-.661c-1.7.514-3.577.91-5.577 1.165a34.313 34.313 0 0 1-3.797 4.246Zm1.027-3.988A30.258 30.258 0 0 1 52 33.183a30.273 30.273 0 0 1-2.564-2.686 43.431 43.431 0 0 0 5.127 0Zm4.378-2.528a30.272 30.272 0 0 0 3.61-.877 30.251 30.251 0 0 0-1.045-3.565 43.49 43.49 0 0 1-2.565 4.442Zm3.727-6.97a34.33 34.33 0 0 1 1.78 5.413c.208-.086.411-.173.61-.263 3.384-1.523 4.99-3.42 4.99-5.149 0-1.728-1.606-3.626-4.99-5.149-.199-.09-.403-.177-.612-.263-.404 1.73-1 3.553-1.778 5.411Zm-.118-6.09a30.263 30.263 0 0 0-3.608-.877 43.45 43.45 0 0 1 2.564 4.44c.44-1.23.789-2.425 1.044-3.563ZM55.81 21a3.81 3.81 0 1 1-7.62 0 3.81 3.81 0 0 1 7.62 0Z"
              clipRule="evenodd"
            />
            <path
              fill="url(#paint0_linear_485_6372)"
              fillOpacity=".4"
              fillRule="evenodd"
              d="M61.023 5.37c1.497.865 2.338 3.203 1.965 6.896-.022.217-.048.437-.078.66a34.32 34.32 0 0 0-5.576-1.165 34.327 34.327 0 0 0-3.797-4.246c.178-.138.355-.27.532-.398 3.011-2.17 5.457-2.61 6.954-1.747ZM52 6.18c-.3-.241-.601-.47-.9-.686-3.123-2.25-6.52-3.358-9.124-1.855-2.602 1.502-3.341 5-2.954 8.828.037.367.085.742.143 1.123-.359.14-.707.286-1.044.438-3.51 1.579-6.169 3.967-6.169 6.972 0 3.006 2.66 5.394 6.169 6.973.336.152.684.297 1.043.438-.058.38-.106.755-.143 1.122-.387 3.83.352 7.326 2.955 8.829 2.602 1.503 6 .394 9.123-1.856.3-.216.6-.444.9-.685.302.24.602.47.902.685 3.122 2.25 6.52 3.359 9.123 1.856 2.603-1.503 3.341-5 2.954-8.829a22.206 22.206 0 0 0-.143-1.123c.359-.14.707-.285 1.044-.437 3.51-1.58 6.168-3.967 6.168-6.973 0-3.005-2.659-5.393-6.168-6.973a22.168 22.168 0 0 0-1.044-.437c.058-.381.105-.756.143-1.123.387-3.83-.352-7.326-2.955-8.829-2.603-1.502-6-.394-9.123 1.856-.3.216-.6.444-.9.685Zm0 2.637c-.86.79-1.72 1.69-2.565 2.687a43.462 43.462 0 0 1 5.13 0A30.273 30.273 0 0 0 52 8.817Zm-5.335 2.944c-1.999.255-3.876.651-5.575 1.166a19.9 19.9 0 0 1-.078-.661c-.373-3.692.468-6.031 1.964-6.895 1.497-.865 3.943-.424 6.954 1.746.177.127.355.26.533.398a34.327 34.327 0 0 0-3.798 4.246Zm-1.608 2.27a43.487 43.487 0 0 0-2.563 4.44c-.44-1.229-.79-2.424-1.045-3.562a30.261 30.261 0 0 1 3.608-.877ZM43.51 21a40.639 40.639 0 0 1 1.932-3.785 40.679 40.679 0 0 1 2.312-3.566 40.69 40.69 0 0 1 4.246-.22c1.464 0 2.885.077 4.245.22a40.684 40.684 0 0 1 2.312 3.567 40.659 40.659 0 0 1 1.933 3.784 40.681 40.681 0 0 1-1.934 3.787 40.688 40.688 0 0 1-2.312 3.567 40.67 40.67 0 0 1-4.244.219c-1.464 0-2.885-.076-4.245-.22a40.694 40.694 0 0 1-2.312-3.566 40.672 40.672 0 0 1-1.933-3.787Zm-2.179 0a34.324 34.324 0 0 1-1.778-5.41c-.209.085-.412.173-.612.262-3.384 1.523-4.989 3.421-4.989 5.15 0 1.728 1.605 3.625 4.99 5.148.198.09.402.177.61.263.404-1.73 1-3.553 1.78-5.413Zm.117 6.093a30.23 30.23 0 0 1 1.046-3.565 43.528 43.528 0 0 0 2.564 4.442 30.26 30.26 0 0 1-3.61-.877Zm-.359 1.982c-.03.223-.056.443-.078.66-.373 3.693.468 6.032 1.965 6.896 1.496.864 3.942.423 6.953-1.747.178-.127.355-.26.534-.398a34.32 34.32 0 0 1-3.797-4.246c-2-.255-3.877-.65-5.577-1.165Zm12.447 5.411c.179.138.357.271.534.399 3.011 2.17 5.457 2.61 6.954 1.746 1.497-.864 2.338-3.203 1.965-6.895a19.91 19.91 0 0 0-.079-.661c-1.7.514-3.577.91-5.577 1.165a34.313 34.313 0 0 1-3.797 4.246Zm1.027-3.988A30.258 30.258 0 0 1 52 33.183a30.273 30.273 0 0 1-2.564-2.686 43.431 43.431 0 0 0 5.127 0Zm4.378-2.528a30.272 30.272 0 0 0 3.61-.877 30.251 30.251 0 0 0-1.045-3.565 43.49 43.49 0 0 1-2.565 4.442Zm3.727-6.97a34.33 34.33 0 0 1 1.78 5.413c.208-.086.411-.173.61-.263 3.384-1.523 4.99-3.42 4.99-5.149 0-1.728-1.606-3.626-4.99-5.149-.199-.09-.403-.177-.612-.263-.404 1.73-1 3.553-1.778 5.411Zm-.118-6.09a30.263 30.263 0 0 0-3.608-.877 43.45 43.45 0 0 1 2.564 4.44c.44-1.23.789-2.425 1.044-3.563ZM55.81 21a3.81 3.81 0 1 1-7.62 0 3.81 3.81 0 0 1 7.62 0Z"
              clipRule="evenodd"
            />
            <defs>
              <linearGradient
                id="paint0_linear_485_6372"
                x1="52"
                x2="52"
                y1="2.95"
                y2="39.051"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset=".775" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            React
          </h2>
        </div>
      </PixelCard>

      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            width="42"
            height="32"
            className="fill-primary inset-0 mt-4 group-hover/canvas-card:fill-sky-400"
          >
            <path
              d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>

          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            Tailwind CSS
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
            className="size-10"
          >
            <path
              d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#4e7896]"
            />
            <path
              d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
              fill="currentColor"
              className="group-hover/canvas-card:fill-[#f58219]"
            />
          </svg>
          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            Java
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 97.1 97"
            className="inset-0 size-10 group-hover/canvas-card:text-[#6DB33F] group-hover/canvas-card:opacity-100 group-focus:opacity-100"
          >
            <g fill="currentColor">
              <path
                fill="currentColor"
                d="M88.4,5.6a42.32,42.32,0,0,1-5.2,9.1A48.46,48.46,0,1,0,15.5,84l1.8,1.6A48.41,48.41,0,0,0,96.8,52C98.2,39.8,94.5,24.2,88.4,5.6ZM22.5,84.4a4.12,4.12,0,1,1-.6-5.8A4.21,4.21,0,0,1,22.5,84.4ZM88.1,69.9C76.2,85.8,50.6,80.4,34.3,81.2c0,0-2.9.2-5.8.6,0,0,1.1-.5,2.5-1,11.5-4,16.9-4.8,23.9-8.4C68,65.7,81.1,51,83.7,35.8c-5,14.6-20.2,27.2-34,32.3C40.2,71.6,23.1,75,23.1,75l-.7-.4c-11.6-5.7-12-30.9,9.2-39,9.3-3.6,18.1-1.6,28.2-4,10.7-2.5,23.1-10.5,28.1-21C93.5,27.5,100.3,53.7,88.1,69.9Z"
              />
            </g>
          </svg>

          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            Spring Boot
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            version="1.1"
            className="text-primary size-10 group-hover/canvas-card:text-[#46A037]"
          >
            <path
              fill="currentColor"
              d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"
            />
          </svg>

          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            MongoDB
          </h2>
        </div>
      </PixelCard>
      <PixelCard variant="blue" className="group/canvas-card border-r border-b">
        <div className="absolute inset-0 z-20 mx-auto flex w-full flex-col items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 25.6 25.6"
            className="text-primary size-10 group-hover/canvas-card:text-[#00678c]"
          >
            <path
              d="M179.076 94.886c-3.568-.1-6.336.268-8.656 1.25-.668.27-1.74.27-1.828 1.116.357.355.4.936.713 1.428.535.893 1.473 2.096 2.32 2.72l2.855 2.053c1.74 1.07 3.703 1.695 5.398 2.766.982.625 1.963 1.428 2.945 2.098.5.357.803.938 1.428 1.16v-.135c-.312-.4-.402-.98-.713-1.428l-1.34-1.293c-1.293-1.74-2.9-3.258-4.64-4.506-1.428-.982-4.55-2.32-5.13-3.97l-.088-.1c.98-.1 2.14-.447 3.078-.715 1.518-.4 2.9-.312 4.46-.713l2.143-.625v-.4c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.64-2.23-.537-.268-1.428-.402-1.74-.848-.805-.98-1.25-2.275-1.83-3.436l-3.658-7.763c-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.18-17.268-16.687-1.65-.937-3.613-1.34-5.7-1.83l-3.346-.18c-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.5-1.205 2.9 1.785 5.755 2.8 7.228.76 1.026 1.74 2.186 2.277 3.346.3.758.4 1.562.713 2.365.713 1.963 1.383 4.15 2.32 5.98.5.937 1.025 1.92 1.65 2.767.357.5.982.714 1.115 1.517-.625.893-.668 2.23-1.025 3.347-1.607 5.042-.982 11.288 1.293 15 .715 1.115 2.4 3.57 4.686 2.632 2.008-.803 1.56-3.346 2.14-5.577.135-.535.045-.892.312-1.25v.1l1.83 3.703c1.383 2.186 3.793 4.462 5.8 5.98 1.07.803 1.918 2.187 3.256 2.677v-.135h-.088c-.268-.4-.67-.58-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.34-.715-1.606-.67.98-1.65 1.83-2.143 3.034-.848 1.918-.936 4.283-1.248 6.737-.18.045-.1 0-.18.1-1.426-.356-1.918-1.83-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937 1.652-3.882 1.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.5-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.5-.535-1.294-.178-1.83.088-.357.268-.5.623-.58.58-.5 2.232.134 2.812.4 1.65.67 3.033 1.294 4.416 2.23.625.446 1.295 1.294 2.098 1.518h.938c1.428.312 3.033.1 4.37.5 2.365.76 4.506 1.874 6.426 3.08 5.844 3.703 10.664 8.968 13.92 15.26.535 1.026.758 1.963 1.25 3.034.938 2.187 2.098 4.417 3.033 6.56.938 2.097 1.83 4.24 3.168 5.98.67.937 3.346 1.427 4.55 1.918.893.4 2.275.76 3.08 1.25 1.516.937 3.033 2.008 4.46 3.034.713.534 2.945 1.65 3.078 2.54zm-45.5-38.772a7.09 7.09 0 0 0-1.828.223v.1h.088c.357.714.982 1.205 1.428 1.83l1.027 2.142.088-.1c.625-.446.938-1.16.938-2.23-.268-.312-.312-.625-.535-.937-.268-.446-.848-.67-1.206-1.026z"
              transform="matrix(.390229 0 0 .38781 -46.300037 -16.856717)"
              fillRule="evenodd"
              fill="currentColor"
            />
          </svg>

          <h2 className="text-foreground relative z-10 h-0 text-xl font-semibold opacity-0 transition-transform duration-200 group-hover/canvas-card:mt-4 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:bg-red-500 group-hover/canvas-card:opacity-100">
            MySQL
          </h2>
        </div>
      </PixelCard>
    </div>
  </section>
);

export default TechnologiesSection;
