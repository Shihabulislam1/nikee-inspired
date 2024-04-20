
import propTypes from "prop-types";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {

   const handleClickMethod=()=>{
    if(bigShoeImg !== imgUrl.bigShoe){
        changeBigShoeImage(imgUrl.bigShoe)
    }
   }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClickMethod}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} 
              alt="shoe collection"
              width={127}
              height={103}
              className="object-contain"
            />
        </div>
    </div>
  );
}

export default ShoeCard;

ShoeCard.propTypes = {
  imgUrl: propTypes.string,
  changeBigShoeImage: propTypes.func,
  bigShoeImg: propTypes.string,
};
