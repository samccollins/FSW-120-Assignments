import React from 'react';
import InfoBox from "./InfoBox";
import "./index.css";

function App() {
  return (
    <div className="boxcontainer">
      <InfoBox 
        backgroundColor="#0493FF"
        title="Box 1"
        subtitle="THIS IS BOX ONE"
        information="This is the first box."
      />
      <InfoBox 
        backgroundColor="#45AFFF"
        title="Box 2"
        subtitle="THIS IS BOX TWO"
        information="This is the second box."
      />
      <InfoBox 
        backgroundColor="#7BC6FF"
        title="Box 3"
        subtitle="THIS IS BOX THREE"
        information="This is the third box."
      />
      <InfoBox 
        backgroundColor="#B9E1FF"
        title="Box 4"
        subtitle="THIS IS BOX FOUR"
        information="This is the fourth box."
      />
      <InfoBox 
        backgroundColor="#027FDD"
        title="Box 5"
        subtitle="THIS IS BOX FIVE"
        information="This is the fifth box."
      />
      <InfoBox 
        backgroundColor="#3E95D7"
        title="Box 6"
        subtitle="THIS IS BOX SIX"
        information="This is the sixth box."
      />
      <InfoBox 
        backgroundColor="#77ACD5"
        title="Box 7"
        subtitle="THIS IS BOX SEVEN"
        information="This is the seventh box."
      />
      <InfoBox 
        backgroundColor="#95BBD8"
        title="Box 8"
        subtitle="THIS IS BOX EIGHT"
        information="This is the eighth box."
      />
      <InfoBox 
        backgroundColor="#4B88B7"
        title="Box 9"
        subtitle="THIS IS BOX NINE"
        information="This is the ninth box."
      />
      <InfoBox 
        backgroundColor="#456D8B"
        title="Box 10"
        subtitle="THIS IS BOX TEN"
        information="This is the tenth box."
      />
    </div>
  );
}

export default App;
