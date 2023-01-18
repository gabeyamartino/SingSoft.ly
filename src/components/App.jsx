import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import esLintLogo from "../assets/eslint.svg";
import prettierLogo from "../assets/prettier.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import plusSign from "../assets/plus-sign-white-tb.svg";

const App = () => {
  return (
    <>
      <div className="mt-5 flex flex-wrap justify-center">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-20 sm:w-60" alt="React logo" />
        </a>
        <img src={plusSign} className="mr-2 ml-4 w-8 sm:w-20" alt="Plus sign" />
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="mt-2 w-20 sm:w-56"
            id="vite"
            alt="Vite logo"
          />
        </a>
        <img src={plusSign} className="mr-2 ml-2 w-8 sm:w-20" alt="Plus sign" />
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src={tailwindLogo}
            className="w-20 sm:w-60"
            alt="Tailwind Logo"
          />
        </a>
        <img src={plusSign} className="mr-4 ml-2 w-8 sm:w-20" alt="Plus sign" />
        <a href="https://prettier.io/" target="_blank" rel="noreferrer">
          <img
            src={prettierLogo}
            className="w-16 pt-3 sm:w-52"
            id="prettier"
            alt="Prettier Logo"
          />
        </a>
        <img src={plusSign} className="mr-2 ml-4 w-8 sm:w-20" alt="Plus sign" />
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src={esLintLogo} className="w-20 sm:w-60" alt="EsLint Logo" />
        </a>
      </div>
      <div className="flex justify-center">
        <sub>
          Icons by{" "}
          <a
            href="http://icons8.com"
            className=" text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            Icons8
          </a>
        </sub>
      </div>
      <div className="mt-10 flex flex-col flex-wrap items-center">
        <h1 className=" mb-4 font-semibold sm:text-2xl">Creation Awaits...</h1>
        <p className="text-sm sm:text-base">
          Click on above images for more information about the individual tools.
        </p>
        <p className="text-sm sm:text-base">
          If you encounter any bugs or errors please file an issue on GitHub.
        </p>
      </div>
    </>
  );
};

export default App;
