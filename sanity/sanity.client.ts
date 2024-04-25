import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nm9nhxds",
  dataset: "production",
  apiVersion: "2024-04-14",
  useCdn: false,
};

const client = createClient(config);

export default client;