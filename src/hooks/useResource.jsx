import { useState } from "react";
import { createResource, getAllResources } from "../services/ultimateService";

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const create = async (resource) => {
    const result = await createResource(baseUrl, resource);
    console.log(result);
    setResources([...resources, result.data]);
  };

  const getAll = async () => {
    const result = await getAllResources(baseUrl);
    setResources(result.data);
  };

  const service = {
    create,
    getAll,
  };

  return [resources, service];
};
