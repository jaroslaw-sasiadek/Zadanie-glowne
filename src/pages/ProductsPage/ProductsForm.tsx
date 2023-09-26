import { useState, useEffect } from "react";

import { Data } from "../../API";
import {
	RequestTypesProp,
	RequestCategoriesProp,
	RequestProductsProp,
} from "../../interfaces";
import {
	DivCategories,
	DivTypes,
	UlProducts,
} from "../ProfilePage/components/UserProductsForm/components";

export const ProductsForm = ({
	setLoading,
}: {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [types, setTypes] = useState<RequestTypesProp>([]);
	const [categories, setCategories] = useState<RequestCategoriesProp>([]);
	const [products, setProducts] = useState<RequestProductsProp>([]);
	useEffect(() => {
		setLoading(true);
		Promise.all([
			Data.Products.GetTypes(),
			Data.Products.GetCategories(),
			Data.Products.GetProducts(),
		])
			.then((response) => {
				setTypes(response[0] as RequestTypesProp);
				setCategories(response[1] as RequestCategoriesProp);
				setProducts(response[2] as RequestProductsProp);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [setLoading]);

	return (
		<section className="flex gap-[16px] w-full">
			<aside className="w-[250px] gap-[16px]">
				<input className="h-[42px] w-[250px] rounded-[4px]" />
				<DivTypes types={types} />
				<DivCategories categories={categories} />
			</aside>
			<section>
				<UlProducts products={products} />
			</section>
		</section>
	);
};