import { type UserConfig, presetIcons, presetMini } from "unocss";
import type { Theme } from "unocss/preset-uno";

export default {
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
		presetMini({ dark: "media" }),
	],
} satisfies UserConfig<Theme>;