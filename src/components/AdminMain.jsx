import React, { useState } from "react";
import { IoMdHome, IoMdTrendingUp } from "react-icons/io";
import { MdCollectionsBookmark, MdDelete } from "react-icons/md";
import { BiSolidOffer, BiSolidLogOut } from "react-icons/bi";
import { IoBagAdd } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";

export default function AdminMain() {
  const [activeTab, setActiveTab] = useState("Dashboard"); // Track the active main tab
  const [showCollectionTabs, setShowCollectionTabs] = useState(false); // Track the visibility of collection sub-tabs
  const [activeCollectionTab, setActiveCollectionTab] = useState(""); // Track the active sub-tab within Collections

  // Function to handle the collection tab click
  const handleCollectionClick = () => {
    setShowCollectionTabs(!showCollectionTabs); // Toggle visibility of collection sub-tabs
    setActiveCollectionTab(""); // Reset the active sub-tab
    setActiveTab("Collections"); // Set the active tab to Collections
  };

  const renderContent = () => {
    // Render different content based on active tab and sub-tab selection
    if (activeTab === "Collections") {
      switch (activeCollectionTab) {
        case "Add":
          return <div className="p-10">Add new items here.</div>;
        case "Update":
          return <div className="p-10">Update existing items here.</div>;
        case "Delete":
          return <div className="p-10">Delete items here.</div>;
        default:
          return <div className="p-10">Select an action from Collections.</div>;
      }
    }

    switch (activeTab) {
      case "Dashboard":
        return <div className="p-10">Welcome to the Dashboard</div>;
      case "Trending":
        return <div className="p-10">See what's trending!</div>;
      case "Offers":
        return <div className="p-10">Manage special offers and discounts.</div>;
      case "Edit Profile":
        return <div className="p-10">Edit your profile details here.</div>;
      default:
        return <div className="p-10">Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="md:w-[20%] lg:w-[18%] border-r-[2px] border-light-green flex flex-col items-center gap-3">
        <img src="VOGUE_PRISM _black.png" alt="VOGUE_PRISM BLACK" className="w-24 h-10 mt-3" />

        <div className="flex justify-center items-center gap-4 mt-3">
          <div className="rounded-full bg-gray-400 w-10 h-10 overflow-hidden">
            <img src="cloth1.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xs font-bold">Hrishikesh Lad</h1>
            <h3 className="text-[10px] text-gray-600">Co-Founder</h3>
          </div>
        </div>

        <div className="h-[2px] bg-light-green w-full"></div>

        {/* Sidebar Menu */}
        <div className="flex flex-col gap-3 mt-3 justify-stretch h-full">
          <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveTab("Dashboard")}>
            <IoMdHome size={20} className="text-dark-green" />
            <h1 className="whitespace-nowrap">Dashboard</h1>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-3 items-center cursor-pointer" onClick={handleCollectionClick}>
              <MdCollectionsBookmark size={20} className="text-dark-green" />
              <h1 className="whitespace-nowrap">Collections</h1>
            </div>

            {/* Collection Sub-Tabs */}
            {showCollectionTabs && (
              <div className="ml-8 flex flex-col gap-2 text-[12px]">
                <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveCollectionTab("Add")}>
                  <IoBagAdd size={16} className="text-dark-green" />
                  <h1 className="whitespace-nowrap">Add</h1>
                </div>
                <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveCollectionTab("Update")}>
                  <RxUpdate size={16} className="text-dark-green" />
                  <h1 className="whitespace-nowrap">Update</h1>
                </div>
                <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveCollectionTab("Delete")}>
                  <MdDelete size={16} className="text-dark-green" />
                  <h1 className="whitespace-nowrap">Delete</h1>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveTab("Trending")}>
            <IoMdTrendingUp size={20} className="text-dark-green" />
            <h1 className="whitespace-nowrap">Trending</h1>
          </div>

          <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveTab("Offers")}>
            <BiSolidOffer size={20} className="text-dark-green" />
            <h1 className="whitespace-nowrap">Offers</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3 text-sm bg-dark-green px-4 py-2 mb-10 rounded-2xl text-white">
          <div className="flex gap-3 items-center cursor-pointer" onClick={() => setActiveTab("Edit Profile")}>
            <FaUserEdit size={20} />
            <h1 className="whitespace-nowrap">Edit Profile</h1>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <BiSolidLogOut size={20} />
            <h1 className="whitespace-nowrap">Logout</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="flex flex-col h-full">
          <div className="mt-2">
            <h1 className="pl-10 text-[20px] font-bold text-gray-700">Admin Panel</h1>
          </div>
          <div className="h-[2px] bg-light-green w-full mt-1"></div>

          {/* Dynamic Content Section */}
          <div className="bg-gray-100 h-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
