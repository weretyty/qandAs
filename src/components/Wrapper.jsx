/* eslint-disable react/prop-types */
import backg from "/images/wm5.jpg"; //

const Wrapper = ({children}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-screen w-full"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
};

export default Wrapper;
