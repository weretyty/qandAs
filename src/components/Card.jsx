/* eslint-disable react/prop-types */

const Card = ({ title, text }) => {
  return (
    <div className=" bg-slate-800 h-[100px] border rounded border-slate-700 mt-6 p-2">
        <h1>{title}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Card;
