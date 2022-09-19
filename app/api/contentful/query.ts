import { createClient } from "contentful";

export const getDataFromContentful = async (
  spaceId: string,
  accessToken: string,
  contentTypeId?: string,
  environmentId?: string
) => {
  const client = createClient({
    space: spaceId,
    environment: environmentId ? environmentId : "master",
    accessToken: accessToken,
  });
  
  const response = contentTypeId
    ? await client.getEntries({
        content_type: contentTypeId,
      })
    : await client.getEntries();
  const itemFields = response.items.map((res: any) => res.fields);
  const data = await Promise.all(itemFields);

  data.forEach((d) => {
    Object.keys(d).forEach((key) => {
      if (d[key].sys?.type === "Asset") {
        const thisData = d[key];
        d[key] = thisData.fields.file.url;
      }
    });
  });

  return data;
};
