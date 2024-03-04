import Image from "next/image";
import RichText from "../components/RichText";
import { client } from "@/lib/contentful";
import { nextImageLoader } from "../components/RecipeImage";
import Modal from "../modal/page";
import NewsletterModal from "../components/modals/NewsletterModal";

const AboutMe = async () => {
  const response = await client.getEntries({
    content_type: "aboutMePage",
  });
  const Content = response?.items?.[0];
  const { bio, missionStatement, bioPicture } = Content?.fields;

  return (
    <div className="py-16 min-h-screen px-10 md:px-40 lg:px-[300px] overflow-y-scroll scrollbar-hide justify-center flex-col">
      <Modal>
        <NewsletterModal />
      </Modal>
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-md text-center">Meet The Chef!</p>
      </header>
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
        {missionStatement}
      </blockquote>

      <div className="pb-10">
        <InlineImage
          alt={bioPicture?.fields?.title}
          src={bioPicture?.fields?.file?.url}
          width={bioPicture?.fields?.file?.details?.image?.width}
          height={bioPicture?.fields?.file?.details?.image?.height}
          className="float-left rounded-md border border-accent mr-4 mb-3"
        />
        <RichText content={bio} />
      </div>
    </div>
  );
};

export default AboutMe;

const InlineImage = (props) => {
  return (
    <Image
      alt={props.alt}
      priority={true}
      sizes="(min-width: 400px) 300px, calc(100vw - 80px)"
      loader={nextImageLoader}
      {...props}
    />
  );
};
