"use client";
import RentalList from "@/components/RentalList";
import Filter from "@/components/filter";
import { useEffect, useState } from "react";

export default function Home() {
  const [rentalData, setRentalData] = useState([]); // State to hold the entire dataset
  const [filteredRentals, setFilteredRentals] = useState(rentalData); // State to hold the filtered rentals
  let filtered = [...rentalData]; // Create a copy of the entire dataset to avoid modifying the original data

  const handleFilterChange = (filters) => {
    // Filter the rentals based on the selected filter options

    if (filters.location) {
      filtered = filtered.filter((rental) =>
        rental.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.moveInDate) {
      filtered = filtered.filter((rental) =>
        isMoveInDateInRange(rental["move in date"], filters.moveInDate)
      );
    }
    if (filters.price) {
      filtered = filtered.filter(
        (rental) => rental.price <= parseInt(filters.price, 10)
      );
    }
    if (filters.propertyType) {
      filtered = filtered.filter(
        (rental) => rental["property type"] === filters.propertyType
      );
    }

    setFilteredRentals(filtered);

    console.log("after filter", filtered);
  };

  const isMoveInDateInRange = (moveInDate, selectedDate) => {
    // Implement logic to check if the move-in date is within the selected date range
    // You can use Date.parse() or any date library to perform date comparison.
    // For simplicity, let's assume the move-in date should be after the selected date.
    return Date.parse(moveInDate.start_date) >= Date.parse(selectedDate);
  };

  useEffect(() => {
    async function getRentalData() {
      const res = await fetch("/data.json");
      const data = await res.json();

      setRentalData(data);
      setFilteredRentals(data); // Initialize the filteredRentals state with the entire dataset
    }

    getRentalData();
  }, []);

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="w-full flex justify-center items-center flex-wrap gap-4 mt-16">
        <RentalList filteredData={filteredRentals} />
      </div>
    </div>
  );
}
