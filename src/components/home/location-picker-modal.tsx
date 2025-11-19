"use client";

import { MapPin, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LocationPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect?: (location: string) => void;
}

// Sample locations - replace with actual data from Firebase
const SAMPLE_LOCATIONS = [
  "Colombo",
  "Kandy",
  "Galle",
  "Jaffna",
  "Matara",
  "Negombo",
  "Kurunegala",
  "Ratnapura",
  "Anuradhapura",
  "Batticaloa",
  "Trincomalee",
  "Nuwara Eliya",
  "Badulla",
  "Monaragala",
  "Kegalle",
  "Kalutara",
];

const LocationPickerModal = ({ isOpen, onClose, onLocationSelect }: LocationPickerModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [filteredLocations, setFilteredLocations] = useState(SAMPLE_LOCATIONS);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle search filtering
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLocations(SAMPLE_LOCATIONS);
    } else {
      const filtered = SAMPLE_LOCATIONS.filter((location) =>
        location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
    }
  }, [searchTerm]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    onLocationSelect?.(location);
    onClose();
    setSearchTerm("");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/30"
        style={{ zIndex: 9997 }}
        onClick={onClose}
      />

      {/* Centered Modal */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 border border-gray-200"
        style={{ zIndex: 9998 }}
      >
        {/* Search Input */}
        <div className="relative mb-6">
          <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-base"
          />
        </div>

        {/* Locations List */}
        <div className="max-h-80 overflow-y-auto">
          {filteredLocations.length > 0 ? (
            <div className="space-y-1">
              {filteredLocations.map((location) => (
                <button
                  key={location}
                  onClick={() => handleLocationSelect(location)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                    selectedLocation === location
                      ? "bg-blue-100 text-blue-900 border-l-4 border-blue-600"
                      : "hover:bg-gray-100 text-gray-900"
                  }`}
                >
                  <MapPin size={18} className="shrink-0 text-gray-600" />
                  <span className="text-sm font-medium">{location}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-12 text-center">
              <p className="text-sm text-gray-500">No locations found</p>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
          <p className="text-xs text-gray-500">Sri Lanka Locations</p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationPickerModal;
