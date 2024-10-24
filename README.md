# `sepruko.dev`

This repository contains the source code for generating the [sepruko.dev]
website, using primarily [Astro][astro], [SolidJS][solid] and [UnoCSS][unocss].

# Building

<details>
<summary><code>requirements</code></summary>
<br>

|      name      | version [(?)][npm-semver] | description                                                                       |
| :------------: | :-----------------------: | :-------------------------------------------------------------------------------- |
|  [`git`][git]  |         `^2.27.0`         | Version control system, allows for cloning this repository to your local machine. |
| [`node`][node] |        `>=20.18.0`        | The Node.js JavaScript runtime.                                                   |
| [`pnpm`][pnpm] |         `^9.12.0`         | A faster, more disk-efficient alternative to the `npm` package manager.           |

---

</details>

```sh
# Clone the repository to your local machine. You may also use SSH.
git clone https://github.com/sepruko/sepruko.github.io.git

# Change directories to the newly-created 'sepruko.github.io'.
cd sepruko.github.io

# Install dependencies.
pnpm i --frozen-lockfile

# Build the site. Check it out in './build/' once it's done!
pnpm run build
```

> [!NOTE]\
> You can also check out the [`build.yml`](.github/workflows/build.yml) workflow
> for another example on how to build this repository.</sup>

# Local Development

Following on from the steps in [the Building section](#building) (excl.
`pnpm build`), you may run a development or preview server aiding in modifying
the source code.

```sh
# Run a live development server, which reflects changes made to the source code.
pnpm run dev

# Run a preview server, which hosts the contents of './build/'.
pnpm run preview
```

> [!TIP]\
> Check out the documentation for [Astro][astro-docs], [SolidJS][solid-docs] and
> [UnoCSS][unocss] if you get stuck!

---

_Thanks for reading! Now, why don't you go ahead and check [my
site][sepruko.dev] out, hmm?_ 🐈‍⬛

<!-- Links -->

[astro]: https://astro.build/
[astro-docs]: https://docs.astro.build/
[git]: https://git-scm.com/
[npm-semver]:
	https://semver.npmjs.com/#syntax-examples
	'What do these (^, >=) mean?'
[node]: https://nodejs.org/
[pnpm]: https://pnpm.io/
[sepruko.dev]: https://sepruko.dev/
[solid]: https://www.solidjs.com/
[solid-docs]: https://docs.solidjs.com/
[unocss]: https://unocss.dev/
