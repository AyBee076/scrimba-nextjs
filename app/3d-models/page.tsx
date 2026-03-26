import getModels from "../lib/models";
import ModelsGrid from "../components/ModelsGrid";
import { ModelsPageProps } from "../types";
import Form from "next/form"

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
  const query = (await searchParams)?.query?.toLowerCase() || "";
  console.log(query);
  const models = await getModels();
  const filteredModels = query
    ? models.filter(
        (model) =>
          model.category.toLocaleLowerCase().includes(query) ||
          model.description.toLocaleLowerCase().includes(query) ||
          model.name.toLocaleLowerCase().includes(query),
      )
    : models;
  return (
    <>
      <Form action="/3d-models">
        <input
          type="search"
          name="query"
          placeholder="Eg: Food"
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
          autoComplete="off"
          defaultValue={query}
          
        />
      </Form>

      <ModelsGrid title="3d Models" models={filteredModels} />
    </>
  );
}
