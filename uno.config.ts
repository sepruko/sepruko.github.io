import {
	type CSSValueInput,
	type UserConfig,
	presetAttributify,
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
					}`
					.trim()
					.replace(/^\t{5}/, "");
			},
		},
	],
	presets: [
		presetAttributify({
			nonValuedAttribute: false,
			strict: true,
		}),
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
			/^b([blrt])-(\d+)$/,
			function* ([, side, size]): Generator<CSSValueInput> {
				// biome-ignore lint/style/useDefaultSwitchClause: Exhaustive.
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

				yield {
					[`border-${side}`]: `${+size / 4}rem`,
				};
			},
		],
		[
			/^(?:(max|min)-)?(h|height|w|width)-([lsd]?v[wh])-([1-9][0-9]?|100)$/,
			function* ([, limit = "", dim, unit, size]): Generator<CSSValueInput> {
				switch (dim) {
					case "h": {
						dim = "height";
						break;
					}
					case "w": {
						dim = "width";
						break;
					}
					default: {
						break;
					}
				}

				yield {
					[`${limit ? `${limit}-` : ""}${dim}`]: `${size}${unit}`,
				};
			},
		],
	],
	shortcuts: [
		[
			/^(b|m|p)([blrt]{2,4})-(\d+)$/,
			([, rule, sides, size]): string => {
				return new Set(sides).size == sides.length
					? [...sides].map((side) => `${rule}${side}-${size}`).join(" ")
					: undefined;
			},
		],
	],
	theme: {
		colors: {
			primary: {
				dark: "#52525b",
				DEFAULT: "#ffffff",
			},
			secondary: {
				dark: "#3f3f46",
				DEFAULT: "#fafaf9",
			},
			tertiary: {
				dark: "#27272a",
				DEFAULT: "#f5f5f4",
			},
			quaternary: {
				dark: "#18181b",
				DEFAULT: "#e7e5e4",
			},
			quinary: {
				dark: "#09090b",
				DEFAULT: "#d6d3d1",
			},
		},
	},
} satisfies UserConfig<Theme>;
