"use client";

import Link from "next/link";

const categories = [
  "Mobile Phones",
  "Laptops",
  "Cameras",
  "Tablets",
  "Watches",
  "Headphones",
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500">
            Categories
          </h1>

          <p className="text-base-content/60 mt-2">
            Browse products by category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categorySlug = category
              .toLowerCase()
              .trim()
              .replace(/\s+/g, "-");

            return (
              <Link
                key={category}
                href={`/categories/${categorySlug}`}
                className="p-6 rounded-2xl border border-base-300 bg-base-200 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-base-content">
                  {category}
                </h2>

                <p className="text-sm text-base-content/60 mt-2">
                  Browse {category}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;