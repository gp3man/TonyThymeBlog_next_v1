import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

const options = {
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <svg
            class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>{children}</p>
        </blockquote>
      );
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <ol className="bg-stone-900 list-inside list-[decimal-leading-zero] m-2 p-2 rounded-lg hover:outline-orange-500 w-full md:w-60vw border-orange-500 border border-opacity-50 items-center align-middle">
          {children}
        </ol>
      );
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <li className="p-4 even:bg-stone-700 rounded-lg items-baseline">
          {children}
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
      return (
        <hr className="py-4 my-20 mx-60 text-lg font-medium border-stone-500" />
      );
    },

    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "recipe") {
        return (
          <Link
            className="text-orange-400 hover:text-orange-600"
            href={`/recipes/${node.data.target.fields.slug}`}
          >
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
        <div className="flex justify-center bg-stone-900 border border-orange-500 border-opacity-50 rounded-lg ">
          <ContentfulImage
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
            className="h-18 w-32 aspect-auto justify-center m-6 rounded-md"
          />
        </div>
      );
    },
  },
};

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
