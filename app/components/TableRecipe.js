import { fetchTableRecipe } from "../mealplans/actions";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Badge from "./badge";
import Image from "next/image";
const TableRecipe = async ({ recipeId }) => {
  const { recipe } = await fetchTableRecipe(recipeId);
  const { title, timeToCook, timeToPrep, contentfulMetadata, thumbnail, slug } =
    recipe;
  const { tags } = contentfulMetadata;
  const totalTime = timeToCook + timeToPrep;
  return (
    <tr className="bg-white border-b hover:bg-secondary hover:text-secondary-content">
      <th
        scope="row"
        className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          alt={title}
          src={thumbnail?.url}
          width={thumbnail?.width}
          height={thumbnail?.height}
          sizes="(min-width: 640px) 60px, 30px"
          className="w-[20px] h-[20px] sm:w-[60px] sm:h-[60px] rounded-lg "
        />
      </th>
      <td className="px-3 py-2">{title}</td>
      <td className="px-3 py-2">{totalTime} mins</td>
      <td className="px-3 py-2">
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Badge key={uuidv4()} text={tag.id} />
          ))}
        </div>
      </td>
      <td className="px-3 py-2 text-center">
        <Link
          href={`/recipes/${slug}`}
          className="font-medium text-accent hover:underline text-center"
        >
          Full Recipe
        </Link>
      </td>
    </tr>
  );
};

export default TableRecipe;
