const ListingCard = ({ image, title, price, rating,releaseDate }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg w-full sm:w-64 md:w-80 lg:w-96 mx-auto">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold">{title}</h3>

      <p className="text-gray-900 font-semibold">${price}</p>
      <p className="text-yellow-500">Rating: {rating}</p>
      <p className="text-gray-500">Release Date: {releaseDate}</p>
    </div>
  </div>
);

export default ListingCard;
