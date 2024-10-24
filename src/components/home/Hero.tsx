import type { JSX } from "solid-js";

/**
 * Create a new Hero section for the `/` path.
 *
 * @param param0
 * The properties to pass, altering the final result.
 *
 * @returns {JSX.Element}
 * A new `solid-js` JSX element.
 */
// biome-ignore lint/correctness/noUnusedVariables: Biome is wrong.
function Hero({ name, determiner = "", subtext }: Hero.Props): JSX.Element {
	if (determiner == "auto") {
		determiner = name.match(/^[aeiou]/i) ? "an" : "a";
	}

	return (
		<article flex="~ items-center justify-center nowrap col" h="vh" id="hero" w="vw">
			<h1 font="size-10 w-600" m="0 b-4" text="center">
				Hey, I'm {determiner ? `${determiner} ` : ""}
				<span font="w-900" p="lr-2" underline="~ indigo-500 wavy">
					{name}
				</span>
				!
			</h1>
			{subtext && <span text="center">{subtext}</span>}
		</article>
	);
}

namespace Hero {
	export interface Props {
		/**
		 * The name to display.
		 */
		name: string;

		/**
		 * The word to use prior to the {@linkcode name} in a sentence.
		 *
		 * @default
		 * ""
		 */
		determiner?: "auto" | "" | "a" | "an" | "the";

		/**
		 * Smaller text to display underneath the introduction to the entity
		 * named by {@linkcode name}.
		 */
		subtext?: string;
	}
}

export default Hero;
