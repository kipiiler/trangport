import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder({
  projectId: "hv3ag2ez",
  dataset: "production",
});

export function urlFor(source: any) {
  return imageBuilder.image(source).auto("format").fit("max");
}
