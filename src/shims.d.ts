import type { AttributifyAttributes } from "unocss/preset-attributify";

declare module "unocss/preset-attributify" {
	interface AttributifyAttributes {
		c?: string | boolean;
	}
}

declare global {
	namespace astroHTML.JSX {
		interface HTMLAttributes extends AttributifyAttributes {}
	}
}

declare module "solid-js" {
	// biome-ignore lint/style/useNamingConvention: Not up to me.
	namespace JSX {
		interface HTMLAttributes extends AttributifyAttributes {}
	}
}
