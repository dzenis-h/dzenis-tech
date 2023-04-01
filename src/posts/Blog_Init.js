import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "beq9vr6s",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
