import { useEffect, useState } from "react";
import { getDataFromContentful } from "./query";

export const plugContentfulData = ({
  spaceId,
  accessToken,
  contentTypeId,
  environmentId,
}: Record<string, any>) => {
  const [data, setData] = useState<Record<string, any>>([]);

  useEffect(() => {
    (async () => {
      const data = await getDataFromContentful(
        spaceId,
        accessToken,
        contentTypeId,
        environmentId
      );
      setData(data);
    })();
  }, []);

  return { data };
};