import Link from "next/link";

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  const categorySlug = category.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  return (
    <Link
      href={`/categories/${categorySlug}`}
      className={`flex flex-col items-center justify-center p-6 h-full min-h-[160px] rounded-2xl border transition-all duration-300 group ${category.color}`}
    >
      <Icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0" />

      <span className="text-base font-bold text-white mb-1">
        {category.name}
      </span>

      <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
        {category.count}
      </span>
    </Link>
  );
};

export default CategoryCard;