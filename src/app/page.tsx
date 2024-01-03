"use client";

import CardItem from "@/components/Card";
import Search from "@/components/Search";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Meal {
      idMeal: string;
}

export default function Home() {
      const [meals, setMeals] = useState([]);
      const [valueSearch, setValueSearch] = useState('')
	useEffect(() => {
		axios({
			method: "get",
                  url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
                  params: {s: valueSearch},
		}).then(function (response) {
			setMeals(response.data.meals);
            }).catch(function (error) {
                  throw new Error('Error', error)
            });
      }, [valueSearch]);

	return (
		<main className="container mx-auto">
			<div className="w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					Get started by editing&nbsp;
					<code className="font-mono font-bold">src/app/page.tsx</code>
				</p>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className="dark:invert"
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>
			<div className="mt-12 w-56 font-mono">
				<Search valueSearch={valueSearch} setValueSearch={setValueSearch} />
			</div>

			<div className="mt-8 grid grid-cols-3 gap-4">
				{meals.map((item: Meal) => {
					return <CardItem key={item.idMeal} meal={item} />;
				})}
			</div>
		</main>
	);
}
