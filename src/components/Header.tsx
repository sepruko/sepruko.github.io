import type { JSX } from "solid-js";

export interface Props {
	children?: JSX.Element;
}

export default function Header({ children }: Props): JSX.Element {
	return (
		<header>
			<nav />
			{children}
		</header>
	);
}
