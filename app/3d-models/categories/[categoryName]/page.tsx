import { CategoryPageProps } from "@/app/types"
import { getCategoryBySlug } from "@/app/lib/categories"

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    console.log(category)
  return (
    <div>{category.displayName}</div>
  )
}
