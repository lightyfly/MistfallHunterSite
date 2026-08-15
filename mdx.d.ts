declare module "*.mdx" {
  import type { ComponentType } from "react";
  const content: ComponentType<{ components?: Record<string, unknown> }>;
  export default content;
}

declare module "*.jsx" {
  import type { ComponentType } from "react";
  const content: ComponentType<{ components?: Record<string, unknown> }>;
  export default content;
}
