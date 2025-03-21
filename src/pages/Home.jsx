/* eslint-disable react/prop-types */

import Wrapper from "../components/Wrapper";
import Card from "../components/Card";


const Home = () => {

  const text1 = "We offer the best profits with fast payouts and good customer service. We offer the best profits with fast payouts and good customer service"
  const text2 = "Invest with us and get maximum quick returns and speedy returns. Invest with us and get maximum quick returns and speedy returns"
  const title1 = "PROFITS"
  const title2 = "INVESTMENT"
  
  

  return (
    <Wrapper>
      <div className="w-[80%]">

      </div>
      <Card text={text1} title={title1}/>
      <Card text={text2} title={title2}/>
    </Wrapper>
  );
};

export default Home;
