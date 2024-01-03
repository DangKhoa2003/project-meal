import React from "react";
import {
      Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CardItem({meal}: {meal: any}) {
	return (
		<Card>
			<CardContent className="p-0">
				<Image alt={meal.strMeal} className="w-full border h-64 object-cover rounded-lg" width={100} height={100} src={meal.strMealThumb} />
			</CardContent>
			<CardFooter>
				<p>{meal.strMeal}</p>
			</CardFooter>
		</Card>
	);
}
