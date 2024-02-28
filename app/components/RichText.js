import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";

const options = {
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <blockquote className="text-xl italic font-semibold text-base-content py-6">
          <svg
            className="w-8 h-8 text-secondary-400 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          {children}
        </blockquote>
      );
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <ol className="bg-base-300 text-base-content list-inside list-[decimal-leading-zero] rounded-lg hover:outline-accent md:w-60vw border-accent border border-opacity-50 items-center align-middle stepList my-3">
          {children}
        </ol>
      );
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <li className="even:bg-secondary even:text-secondary-content rounded-lg items-baseline p-6">
          {children}
        </li>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-base clear-right ">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="text-3xl font-black">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-2xl font-bold">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-lg font-medium">{children}</h3>;
    },
    [BLOCKS.HR]: (node, children) => {
      return (
        <hr className="py-6 mt-6 text-lg font-medium border-accent" />
      );
    },

    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "recipe") {
        return (
          <Link
            className="text-accent hover:text-accent-focus"
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
          <Image
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
