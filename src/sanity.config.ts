import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "trang",
  title: "trang Studio",

  projectId: "hv3ag2ez",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
