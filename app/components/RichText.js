import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

const options = {
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <span className="font-thin">
          {children}
        </span>
      );
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <ul className="bg-stone-900 list-inside list-[decimal-leading-zero] p-2 rounded-lg space-y-4 hover:outline-orange-500 w-full md:w-60% border-orange-500 border border-opacity-50 border-double box-border items-center">
          {children}
        </ul>
      );
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <li className="flex-col items-center p-4 even:bg-stone-700 rounded-lg">
          <div className="space-x-4">{children}</div>
        </li>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-base text-stone-400">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {

      return <h1 className="text-3xl font-black text-stone-50">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {

      return <h1 className="text-2xl font-bold text-stone-200">{children}</h1>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {

      return <h1 className="text-lg font-medium text-stone-300">{children}</h1>;
    },
    [BLOCKS.HR]: (node, children) => {

      return <hr className="py-4 my-20 mx-60 text-lg font-medium border-stone-500" />;
    },

    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "recipe") {
        return (
          <Link className="text-orange-400 hover:text-orange-600" href={`/recipes/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },

    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
          className="h-18 w-32 aspect-auto justify-center flex m-6 p-4"
        />
      );
    },
  },
};

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
