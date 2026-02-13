import { useTheme } from "../../context/theme/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex items-center">
        <label
          htmlFor="theme"
          className="flex items-center select-none tap-transparent cursor-pointer"
        >
          <span className="relative mx-3">
            {/* Toggle Input */}
            <input
              id="theme"
              className="peer relative z-10 block w-16 h-8 appearance-none rounded-[25%/50%] transition-all duration-300 ease-in-out cursor-pointer
              bg-[hsl(249,73%,27%)] shadow-[0_0_0_0.125em_rgba(0,0,0,0.1)]
              before:block before:w-10 before:h-10 before:rounded-full before:transition-all before:duration-300 before:content-['']
              before:bg-[hsl(245,84%,50%)]
              checked:bg-[hsl(100,2%,70%)]
              checked:before:bg-[hsl(62,86%,49%)] checked:before:translate-x-12
              focus:shadow-[0_0_0_0.125em_rgba(0,0,0,0.1)] focus:outline-none
              focus-visible:shadow-[0_0_0_0.125em_rgba(0,0,0,0.3)]"
              type="checkbox"
              role="switch"
              name="theme"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            {/* Full screen fill */}
            <span className="fixed inset-0 h-full block bg-white mix-blend-difference -translate-x-full transition-transform duration-300 peer-checked:translate-x-0 pointer-events-none" />

            {/* Icon container - sun/moon */}
            <span className="absolute top-2 left-2 block w-6 h-6 z-10 transition-transform duration-300 peer-checked:translate-x-12 pointer-events-none">
              {/* Moon/Sun center part */}
              <span className="sun-moon-center" />

              {/* Sun rays (8 parts) */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                <span
                  key={index}
                  className={`sun-ray sun-ray-${index + 1}`}
                  style={{ "--rotation": `${angle}deg` }}
                />
              ))}
            </span>
          </span>
        </label>
      </div>

      <style>{`
        .tap-transparent {
          -webkit-tap-highlight-color: transparent;
        }

        .sun-moon-center {
          position: absolute;
          top: calc(50% - 0.5em);
          left: calc(50% - 0.5em);
          width: 1em;
          height: 1em;
          border-radius: 50%;
          box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
          transform: scale(0.5);
          transition:
            box-shadow 0.3s ease-in-out,
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
        }

        input:checked ~ span .sun-moon-center {
          box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;
          transform: scale(1) translate(0.2em, 0.2em);
        }

        .sun-ray {
          position: absolute;
          top: 50%;
          left: calc(50% - 0.05em);
          width: 0.1em;
          height: 0.2em;
          background-color: hsl(0, 0%, 100%);
          border-radius: 0.05em;
          transform-origin: 50% 0;
          transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
        }

        .sun-ray-1 {
          transform: rotate(0deg) translateY(0.5em);
        }
        .sun-ray-2 {
          transform: rotate(45deg) translateY(0.45em);
        }
        .sun-ray-3 {
          transform: rotate(90deg) translateY(0.45em);
        }
        .sun-ray-4 {
          transform: rotate(135deg) translateY(0.45em);
        }
        .sun-ray-5 {
          transform: rotate(180deg) translateY(0.45em);
        }
        .sun-ray-6 {
          transform: rotate(225deg) translateY(0.45em);
        }
        .sun-ray-7 {
          transform: rotate(270deg) translateY(0.5em);
        }
        .sun-ray-8 {
          transform: rotate(315deg) translateY(0.5em);
        }

        input:checked ~ span .sun-ray {
          opacity: 0;
        }

        input:checked ~ span .sun-ray-1 {
          transform: rotate(45deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-2 {
          transform: rotate(90deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-3 {
          transform: rotate(135deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-4 {
          transform: rotate(180deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-5 {
          transform: rotate(225deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-6 {
          transform: rotate(270deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-7 {
          transform: rotate(315deg) translateY(0.8em);
        }
        input:checked ~ span .sun-ray-8 {
          transform: rotate(360deg) translateY(0.8em);
        }
      `}</style>
    </>
  );
};

export default ThemeToggle;
