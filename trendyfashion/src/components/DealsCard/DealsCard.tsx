interface IDealsCard{
    text:string;
    price: number
    discount: number
    image: string
}

const DealsCard = ({text,price,discount,image}:IDealsCard) => {
  return (
    <div>
      <div className="flex gap-8 items-center h-22 py-14">
        <div className="w-20 h-16">
            <img src={image} alt="" />
        </div>
        <div className="gap-8 text-xs font-light ">
            <p>{text}</p>
            <div className="flex items-center gap-2 ">
                <p className="text-amber-600">${price}</p>
                <p className="line-through text-gray-500">${discount}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DealsCard
