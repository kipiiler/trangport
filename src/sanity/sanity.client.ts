// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "hv3ag2ez",
  dataset: "production",
  apiVersion: "2024-06-25",
  useCdn: false,
};

const client = createClient(config);

export default client;
