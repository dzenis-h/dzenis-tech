import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "beq9vr6s",
  dataset: "production",
  useCdn: true, // Enable CDN caching
});

export default client;
