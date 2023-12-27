import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Circular from "../images/circular.png";

const Cursor = () => {
  const dotOutline = useRef();
  const dotOutlineCircular = useRef();
  const dot = useRef();

  const divStyle = {
    backgroundImage: `url(${Circular})`,
  };

  useEffect(() => {
    if (dot.current) {
      gsap.set(dot.current, { xPercent: -50, yPercent: -50 });
      gsap.set(dotOutline.current, { xPercent: -50, yPercent: -50 });
      gsap.set(dotOutlineCircular.current, { xPercent: -50, yPercent: -50 });
      window.addEventListener("mousemove", (e) => {
        gsap.to("#cursor-outline", {
          duration: 0.8,
          x: e.clientX,
          y: e.clientY,
        });
        gsap.to("#circular-cursor", {
          duration: 0.8,
          x: e.clientX,
          y: e.clientY,
        });
        gsap.to("#cursor-dot", { duration: 0, x: e.clientX, y: e.clientY });
      });
    }
  });

  return (
    <div className="absolute" id="cursor">
      <div
        ref={dot}
        id="cursor-dot"
        className="fixed h-2 w-2 rounded-full bg-slate-50 pointer-events-none  z-50"
      ></div>
      <div
        ref={dotOutline}
        id="cursor-outline"
        className="fixed h-8 w-8 rounded-full bg-slate-100 border-1 border-slate-50 pointer-events-none mix-blend-difference z-50"
      ></div>
      <div
        ref={dotOutlineCircular}
        id="circular-cursor"
        style={divStyle}
        className="fixed h-auto w-auto rounded-full pointer-events-none hidden z-50"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 300 297"
          fill="none"
          className="animate-spin-slow"
        >
          <path
            d="M154.615 254V288.62H168.595V296.3H131.335V288.62H145.315V254H154.615Z"
            fill="black"
          />
          <path
            d="M121.271 252.634L84.4002 281.055L77.7592 277.569L80.2038 231.08L88.4916 235.43L87.7319 245.399L105.211 254.573L112.93 248.256L121.271 252.634ZM85.7602 270.588L99.0743 259.551L87.0675 253.249L85.6539 270.532L85.7602 270.588Z"
            fill="black"
          />
          <path
            d="M72.0435 221.659L37.2312 245.688L31.9482 238.034L47.1076 227.57L47.0394 227.472L21.8935 223.467L15.5539 214.283L43.3741 218.993L49.8889 189.562L56.2967 198.846L50.7922 224.881L50.8604 224.98L66.7605 214.005L72.0435 221.659Z"
            fill="black"
          />
          <path
            d="M46.3886 174.083L4.39699 179.182L0.903835 150.413L8.1109 149.538L10.5337 169.492L20.3615 168.298L18.0978 149.655L25.3645 148.773L27.6281 167.416L38.1111 166.143L35.6884 146.19L42.8954 145.315L46.3886 174.083Z"
            fill="black"
          />
          <path
            d="M49.1675 114.949L40.1913 111.545L43.6381 102.457L52.6142 105.861L49.1675 114.949Z"
            fill="black"
          />
          <path
            d="M63.6914 82.8482L35.6413 51.1862L41.4347 46.0536L69.3514 56.0305L62.7673 27.1546L68.4709 22.1016L96.521 53.7636L90.1886 59.3736L73.0801 40.0621L77.7974 61.8544L73.8902 65.3159L52.9896 58.1011L69.9788 77.2779L63.6914 82.8482Z"
            fill="black"
          />
          <path
            d="M111.618 48.288L101.495 7.21712L129.633 0.281747L131.37 7.33078L111.854 12.141L114.224 21.7534L132.458 17.259L134.21 24.3663L115.975 28.8606L118.503 39.1138L138.018 34.3036L139.756 41.3526L111.618 48.288Z"
            fill="black"
          />
          <path
            d="M170.656 43.9187L172.953 34.5977L182.39 36.9238L180.093 46.2449L170.656 43.9187Z"
            fill="black"
          />
          <path
            d="M206.333 56.2918L234.383 24.6298L241.344 30.7968L230.084 43.5065L244.815 56.5568L256.075 43.8471L263.036 50.0141L234.986 81.6761L228.025 75.5091L239.682 62.3503L224.952 49.3L213.294 62.4588L206.333 56.2918Z"
            fill="black"
          />
          <path
            d="M244.358 97.8788L283.91 82.879L294.186 109.976L287.398 112.55L280.27 93.7564L271.014 97.267L277.673 114.827L270.829 117.422L264.169 99.8627L254.296 103.607L261.423 122.401L254.635 124.976L244.358 97.8788Z"
            fill="black"
          />
          <path
            d="M257.231 144.269L299.223 149.368L296.894 168.547C296.325 173.233 294.755 176.709 292.183 178.975C289.611 181.242 286.3 182.129 282.25 181.638C279.113 181.257 276.591 180.124 274.684 178.241C272.812 176.402 271.68 173.947 271.287 170.878C270.396 172.905 268.657 174.447 266.071 175.503L252.798 180.781L254.035 170.596L268.319 164.957C269.463 164.491 270.287 163.846 270.79 163.02C271.333 162.2 271.677 161.194 271.821 160.003L272.371 155.476L256.11 153.502L257.231 144.269ZM279.042 156.286L278.037 164.565C277.434 169.529 279.118 172.252 283.089 172.734C287.02 173.211 289.287 170.968 289.89 166.004L290.895 157.725L279.042 156.286Z"
            fill="black"
          />
          <path
            d="M244.851 197.184L279.663 221.213L263.2 245.063L257.225 240.939L268.644 224.397L260.496 218.773L249.828 234.228L243.804 230.07L254.472 214.615L245.781 208.616L234.363 225.158L228.388 221.034L244.851 197.184Z"
            fill="black"
          />
          <path
            d="M203.558 239.603L208.019 248.103L199.412 252.62L194.951 244.12L203.558 239.603Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
