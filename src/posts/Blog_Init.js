import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "beq9vr6s",
  dataset: "production",
  apiVersion: "2021-06-07",
  useCdn: true,
});
