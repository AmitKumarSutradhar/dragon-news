import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
    others_info,
  } = news;

  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center p-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-sm font-semibold">{author.name}</h3>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
        <div className="ml-auto text-gray-400">
          <FaShareAlt />
        </div>
      </div>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {details.length > 100 ? `${details.substring(0, 100)}...` : details}
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-yellow-500">
          <FaStar />
          <span className="text-sm">{rating.number}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
