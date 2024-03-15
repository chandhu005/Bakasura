
import ItemList from "./ItemList";

function ResCategory({ data ,showItems,setShowIndex}) {
  const handleClick=()=>{
    setShowIndex();
  }
 
  return (
    <div>
      {/*Header section*/}
      <div className="w-6/12 mx-auto my-4 bg-purple-50 shadow-xl p-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick} >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>{" "}
       {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/*According BOdy */}
    </div>
  );
}
export default ResCategory;
