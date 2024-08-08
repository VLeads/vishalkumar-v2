import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { BLOGS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Blogs() {
  return (
    <>
      <NextSeo
        title="Projects by Vishal Kumar - React and Frontend Developer Portfolio"
        description="Explore a collection of projects by Vishal Kumar, a seasoned FullStack Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/blogs`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/blogs`,
          title:
            "Discover Projects by Vishal Kumar - FullStack Developer",
          description:
            "Explore a showcase of projects crafted by Vishal Kumar, a React and Frontend Developer. Witness the fusion of creativity and technology in web development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Vishal Kumar - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects, Portfolio, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design, FullStack developer",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Blogs
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {BLOGS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <p className="mt-10 text-base md:text-xl">
              Visit my blog site to see some of the latest blogs{" "}
              <a
                href={`${siteMetadata.blogs}`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Blogs
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
