import Image, { StaticImageData } from "next/image";

import imageMacOS from "../public/images/macos-app.png";
import imageCodeInterview from "../public/images/coding-interview.jpeg";
import imageCodeReview from "../public/images/code-review.jpeg";

export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Ngoné MOohamadou Diop",
        description:
          "Get to know Ngoné MOohamadou Diop and the things he loves by visiting his personal website.",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}


type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};
function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props;
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1
text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              🔗 {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
export default function Movies() {
  return (
    <div className="mt-4 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Essays I Recommend</h1>
        <p className="text-base mt-2 text-zinc-600">
          I would like to share with you some essays that I liked!
        </p>
      </header>
      <div className="mt-10">
        <h2 className="text-2xl text-red-800">Movies</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"Code Review in Tech"}
            url={"https://gracehuang.gumroad.com/l/codereviews"}
            urlDisplay={"Grace Huang"}
            imageSrc={imageCodeReview }
          />
          <ProjectItem
            name={"Code Interview"}
            url={"https://www.amazon.com/Nail-Coding-Interview-Six-Step-Framework/dp/B0CH28XMGQ"}
            urlDisplay={"Amazon"}
            imageSrc={imageCodeInterview}
          />
          <ProjectItem
            name={"macOs App with SwiftUI"}
            url={"https://leanpub.com/macos-apps-swiftui"}
            urlDisplay={"LeanPub"}
            imageSrc={imageMacOS}
          />
        </ul>
      </div>
    </div>
  );
}
