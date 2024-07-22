import Image, { StaticImageData } from "next/image";

import imageInception from "../public/images/movies/Inception.jpg";
import imageAZ from "../public/images/movies/AzurAsmar.jpg";
import imageLucy from "../public/images/movies/Lucy.jpg";
import imageOP from "../public/images/movies/OP.jpg";
import imageOK from "../public/images/movies/itOK.jpg";
import imageFriends from "../public/images/movies/Friends.jpg";

export async function getStaticProps() {
  return {
    props: {
      pageId: "movies",
      metadata: {
        title: "Mariama Sow",
        description:
          "Get to know Mariama Sow and the things she loves by visiting her personal website.",
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
        <h1 className="font-bold text-4xl text-zinc-800">Movies I Recommend</h1>
        <p className="text-base mt-2 text-zinc-600">
          I would like to share with you some movies that I loved!
        </p>
      </header>
      <div className="mt-10">
        <h2 className="text-2xl text-red-800">Movies</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"Lucy"}
            url={"https://www.netflix.com/be-fr/title/70307658"}
            urlDisplay={"Netflix"}
            imageSrc={imageLucy}
          />
          <ProjectItem
            name={"Azur et Asmar"}
            url={"https://anime-sama.fr/catalogue/azur-et-asmar/"}
            urlDisplay={"Anime Sama"}
            imageSrc={imageAZ}
          />
          <ProjectItem
            name={"Inception"}
            url={"https://www.justwatch.com/fr/film/inception"}
            urlDisplay={"Just Watch"}
            imageSrc={imageInception}
          />
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl text-red-800">Series</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"One Piece"}
            url={"https://v5.voiranime.com/anime/one-piece/"}
            urlDisplay={"Voir Anime"}
            imageSrc={imageOP}
          />
          <ProjectItem
            name={"It okay to not be okay"}
            url={"https://www.netflix.com/sn/title/81243992"}
            urlDisplay={"Netflix"}
            imageSrc={imageOK}
          />
          <ProjectItem
            name={"FRIENDS"}
            url={"https://www.netflix.com/sn/title/70153404"}
            urlDisplay={"Netflix"}
            imageSrc={imageFriends}
          />
        </ul>
      </div>
    </div>
  );
}
