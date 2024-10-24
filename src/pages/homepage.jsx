import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import Categories from '../components/categories';
import ListingCard from '../components/listingCard';
import Footer from '../components/Footer';
import listingsData from '../data/listings'; 

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(listingsData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-40"> {}
        <Categories />
        <h1 className="text-2xl font-bold p-4">Available Listings</h1>
        <div className="flex flex-wrap justify-start gap-8 p-2">
          {listings.map(({ id, image, title, type, price, rating }) => (
            <ListingCard
              key={id}
              image={image}
              title={title}
              type={type}
              price={price}
              rating={rating}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );};

export default HomePage;
