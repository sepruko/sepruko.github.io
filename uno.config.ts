import {
	type UserConfig,
	toEscapedSelector as e,
	presetIcons,
	presetMini,
	presetWebFonts,
} from "unocss";
import type { Theme } from "unocss/preset-uno";

export default {
	preflights: [
		{
			getCSS: (): string => {
				return `
					* {
						box-sizing: border-box;
					}

					body {
						margin: 0;
					}
				`.replace(/^\t{4,5}/, "");
			},
		},
	],
	presets: [
		presetIcons({
			autoInstall: false,
			collections: {
				tabler: (): any => import("@iconify-json/tabler/icons.json").then((i) => i.default),
			},
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
			prefix: "icon-",
		}),
		presetMini({
			dark: "media",
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Gantari",
				mono: "JetBrains Mono",
			},
		}),
	],
	rules: [
		[
			/^(?:b|border)-(tlr|tlrd|trr|trrd|blr|blrd|brr|brrd)-(\d+)$/,
			([, corner, size], { rawSelector }): string => {
				const selector = e(rawSelector);

				// biome-ignore lint/style/useDefaultSwitchClause: exhaustive
				switch (corner) {
					case "tlr":
					case "tlrd": {
						corner = "top-left";
						break;
					}
					case "trr":
					case "trrd": {
						corner = "top-right";
						break;
					}
					case "blr":
					case "blrd": {
						corner = "bottom-left";
						break;
					}
					case "brr":
					case "brrd": {
						corner = "bottom-right";
						break;
					}
				}

				return `
					${selector} {
						border-${corner}-radius: ${+size / 4}rem;
					}
				`.replace(/\t{4,5}/, "");
			},
		],
		[
			/^(?:h|height)-(\d+)$/,
			([, size], { rawSelector }): string => {
				const selector = e(rawSelector);

				return `
					${selector} {
						height: ${+size / 4}rem;
					}
				`.replace(/^\t{3,4}/gm, "");
			},
		],
		[
			/^(?:h|height)-(dvh|dvw)-(\d+)$/,
			([, unit, size], { rawSelector }): string => {
				const selector = e(rawSelector);

				return `
					${selector} {
						height: ${Math.max(Math.min(+size, 100), 0)}${unit};
					}
				`.replace(/^\t{3,4}/gm, "");
			},
		],
		[
			/^(?:p|padding)-(b|bottom|l|left|r|right|t|top)-(\d+)$/,
			([, side, size], { rawSelector }): string => {
				const selector = e(rawSelector);

				// biome-ignore lint/style/useDefaultSwitchClause: exhaustive
				switch (side) {
					case "b": {
						side = "bottom";
						break;
					}
					case "l": {
						side = "left";
						break;
					}
					case "r": {
						side = "right";
						break;
					}
					case "t": {
						side = "top";
						break;
					}
				}

				return `
					${selector} {
						padding-${side}: ${+size / 4}rem;
					}
				`.replace(/^\t{3,4}/gm, "");
			},
		],
	],
} satisfies UserConfig<Theme>;
