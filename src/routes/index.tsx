import type React from "react";
import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

// Third Party
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";

// UI
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

import { Footer } from "@/components/footer";
//home
import  Home  from "@/components/home";


// Magic Values
import { useTodoStore } from "@/store/todo";


export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	// Instance
	const { toast } = useToast();
	const navigate = useNavigate();

	// States
	const todoStore = useTodoStore((state) => state.todo);
	const addTodo = useTodoStore((state) => state.addTodo);
	const removeTodo = useTodoStore((state) => state.removeTodo);
	const toggleTodo = useTodoStore((state) => state.toggleTodo);
	const clearTodo = useTodoStore((state) => state.clearTodo);
	const [todo, setTodo] = useState("" as string);

	// Hooks
	const [animationParent] = useAutoAnimate();

	// Function
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const prevTodoList = [...todoList];
		// prevTodoList.push({
		// 	title: todo,
		// 	completed: false,
		// });
		// setTodoList(prevTodoList);

		addTodo({
			id: Math.random(),
			title: todo,
			completed: false,
		});
		setTodo("");

		toast({
			description: "Todo added.",
		});
	};

	const handleDelete = (id: number) => {
		// const prevTodoList = [...todoList];
		// prevTodoList.splice(id, 1);
		// setTodoList(prevTodoList);

		removeTodo(id);

		toast({
			description: "Todo deleted.",
		});
	};

	const handleComplete = (id: number) => {
		// const prevTodoList = [...todoList];
		// prevTodoList[id].completed = !prevTodoList[id].completed;
		// setTodoList(prevTodoList);

		toggleTodo(id);
	};

	return (
		<div className="relative px-4 md:px-0 scroll-smooth">
			<Navbar />
			<section className="pb-20 ">
				<div className="flex flex-col items-center justify-center gap-12 overflow-hidden overflow-y-auto">
					<Home />
				</div>
			</section>
			<Footer />
		</div>
	);
}
