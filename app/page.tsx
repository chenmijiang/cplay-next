import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center w-[90%] md:w-[75%] lg:w-[65%] h-[150px] sm:h-[200px] md:h-[250px] m-auto absolute inset-0 select-none">
        <b className="font-vibur text-[10vh] sm:text-[14vh] md:text-[16vh] lg:text-[19vh] text-[#fee] [text-shadow:0_-40px_100px,0_0_2px,0_0_1em_#ff4444,0_0_0.5em_#ff4444,0_0_0.1em_#ff4444,0_10px_3px_#000]">
          C<span className="animate-[blink_2s_linear_infinite]">play</span>
          -Ne
          <span className="animate-[blink_3s_linear_infinite]">x</span>t
        </b>
      </div>
      <Link
        href="https://github.com/chenmijiang/cplay-next"
        className="clear-both text-white border-2 border-solid rounded text-center block font-sans text-4 w-[13em] py-2 px-4 font-semibold absolute bottom-5 left-0 right-0 mx-auto bg-black/20 shadow-[0_0_0px_3px_rgba(0,0,0,0.2)] opacity-40 hover:text-white hover:opacity-100"
        target="_blank"
      >
        Coming soon...
      </Link>
    </>
  );
}
