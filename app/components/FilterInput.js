
const FilterInput = ({}) => {
  return (
    <li>
      <div className="flex items-center">
        <input
          id="checkbox-item-1"
          type="checkbox"
          value={field}
          className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="checkbox-item-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {field}
        </label>
      </div>
    </li>
  );
};

export default FilterInput;
