/* eslint-disable react/prop-types */


const Option = ({optionName, text}) => {
  return (
    <div className="bg-yellow-200 w-full h-[50px] rounded-xl p-[6px] border-2 border-slate-900 flex items-center justify-center relative">
            <p className="text-slate-900 font-semibold text-3xl text-center  ">
              {text}
            </p>
            <div className="absolute bg-red-500 -left-0 top-0 w-10 h-full text-center flex items-center justify-center text-4xl border-r-2 border-slate-900 rounded-lg">
              {optionName}
            </div>
          </div>
  )
}

export default Option