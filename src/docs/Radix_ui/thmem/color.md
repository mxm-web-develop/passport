Guides

Color
=====

Understanding the color system and its application in your theme.

Radix Themes comes with a number of color scales, each with their own light, dark and alpha variants. Under the hood, the color system is powered by [Radix Colors](/colors).

[Accents](#accents)
-------------------

Accent color is the most dominant color in your theme. It is used for primary buttons, links and other interactive elements. `accentColor` is specified directly on the [Theme](/themes/docs/components/theme) component:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme accentColor="indigo">
    	<MyApp />
    </Theme>
    

#### Available accent colors

There is a range of accent colors to choose from:

Gray

Gold

Bronze

Brown

Yellow

Amber

Orange

Tomato

Red

Ruby

Crimson

Pink

Plum

Purple

Violet

Iris

Indigo

Blue

Cyan

Teal

Jade

Green

Grass

Lime

Mint

Sky

#### Accent scale anatomy

Each accent is a 12-step scale that includes a solid and a transparent variant of each color. For example, here’s the `indigo` color scale:

1

2

3

4

5

6

7

8

9

10

11

12

#### Accent scale tokens

Accent color tokens can be accessed using CSS variables. You can use these tokens to style your custom components, ensuring they are accessible and consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Backgrounds */
    var(--accent-1);
    var(--accent-2);
    
    /* Interactive components */
    var(--accent-3);
    var(--accent-4);
    var(--accent-5);
    
    /* Borders and separators */
    var(--accent-6);
    var(--accent-7);
    var(--accent-8);
    
    /* Solid colors */
    var(--accent-9);
    var(--accent-10);
    
    /* Accessible text */
    var(--accent-11);
    var(--accent-12);
    
    /* Functional colors */
    var(--accent-surface);
    var(--accent-indicator);
    var(--accent-track);
    var(--accent-contrast);
    

[Grays](#grays)
---------------

You can also choose between a pure gray or a number of tinted grays. Your accent color will be automatically paired with a gray shade that compliments it. However, you can also specify a custom `grayColor` directly on the [Theme](/themes/docs/components/theme) component:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme grayColor="mauve">
    	<MyApp />
    </Theme>
    

#### Available gray colors

There is 6 grays to choose from. The difference may seem subtle, but it is impactful especially on pages with a lot of text or in dense UIs.

Gray

Mauve

Slate

Sage

Olive

Sand

#### Gray scale anatomy

Grays are based on the same 12-step color scale that includes a solid and a transparent variant of each color. For example, here’s the `slate` color scale:

1

2

3

4

5

6

7

8

9

10

11

12

#### Gray scale tokens

Gray color tokens can be accessed using CSS variables. You can use these tokens to style your custom components, ensuring they are accessible and consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Backgrounds */
    var(--gray-1);
    var(--gray-2);
    
    /* Interactive components */
    var(--gray-3);
    var(--gray-4);
    var(--gray-5);
    
    /* Borders and separators */
    var(--gray-6);
    var(--gray-7);
    var(--gray-8);
    
    /* Solid colors */
    var(--gray-9);
    var(--gray-10);
    
    /* Accessible text */
    var(--gray-11);
    var(--gray-12);
    
    /* Functional colors */
    var(--gray-surface);
    var(--gray-indicator);
    var(--gray-track);
    var(--gray-contrast);
    

[Color overrides](#color-overrides)
-----------------------------------

When available, the `color` prop on the components can be used to override the theme accent. Nested components will automatically inherit the new accent color.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

There are new commits.Refresh

There are new commits.Refresh

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme accentColor="indigo">
    	<Flex align="start" direction={{ initial: "column", sm: "row" }} gap="4">
    		<Callout.Root>
    			<Callout.Icon>
    				<InfoCircledIcon />
    			</Callout.Icon>
    			<Callout.Text>
    				<Flex as="span" align="center" gap="4">
    					<Text>There are new commits.</Text>
    					<Button variant="surface" size="1" my="-2">
    						Refresh
    					</Button>
    				</Flex>
    			</Callout.Text>
    		</Callout.Root>
    
    		<Callout.Root color="gray">
    			<Callout.Icon>
    				<InfoCircledIcon />
    			</Callout.Icon>
    			<Callout.Text>
    				<Flex as="span" align="center" gap="4">
    					<Text>There are new commits.</Text>
    					<Button variant="surface" size="1" my="-2">
    						Refresh
    					</Button>
    				</Flex>
    			</Callout.Text>
    		</Callout.Root>
    	</Flex>
    </Theme>
    

#### Individual color tokens

Individual colors can be accessed directly using similar CSS variables by their corresponding names. For example, the reds are accessed via `--red-1`, `--red-2`, and so on up to `--red-12`.

[High contrast](#high-contrast)
-------------------------------

Most of the time, components with a `color` prop also provide a `highContrast` option that achieves appearance that stands out against the page background:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Edit profileEdit profile

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Flex gap="4">
    	<Button variant="classic" color="gray">
    		Edit profile
    	</Button>
    	<Button variant="classic" color="gray" highContrast>
    		Edit profile
    	</Button>
    </Flex>
    

[Focus and selection](#focus-and-selection)
-------------------------------------------

Radix Themes automatically adjusts the focus and selection colors depending on the accent color of the current component. Most of the time, setting the `color` prop will intelligently change the focus and selection colors to avoid a mismatch of conflicting hues:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Complete your account setup in [settings](#)Complete your account setup in [settings](#)Complete your account setup in [settings](#)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme accentColor="indigo">
    	<Flex direction="column" gap="4">
    		<Text>
    			Complete your account setup in <Link href="#">settings</Link>
    		</Text>
    		<Text color="gray">
    			Complete your account setup in <Link href="#">settings</Link>
    		</Text>
    		<Text color="red">
    			Complete your account setup in <Link href="#">settings</Link>
    		</Text>
    	</Flex>
    </Theme>
    

#### Focus scale tokens

Focus color tokens can be accessed using CSS variables that follow a similar naming structure like the other scales, e.g. `--focus-1`, `--focus-2`, and so on up to `--focus-12`.

Most of the components use `--focus-8` for the focus outline color.

[Alpha colors](#alpha-colors)
-----------------------------

Every color has an alpha variant which is designed to appear visually the same when placed over the page background. This is a powerful tool that allows colors to look naturally when overlayed over another background. All numerical color steps have a corresponding alpha variant.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Solid colors */
    var(--red-1);
    var(--red-2);
    ...
    var(--red-12);
    
    /* Alpha colors */
    var(--red-a1);
    var(--red-a2);
    ...
    var(--red-a12);
    

Alpha colors are used automatically within Radix Themes components—no additional configuration is required.

[Backgrounds](#backgrounds)
---------------------------

A number of background colors are used to create a sense of visual hierarchy in Radix Themes UIs. These colors are used for backgrounds, cards, and other surfaces.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Page background */
    var(--color-background);
    
    /* Panel backgrounds, such as cards, tables, popovers, dropdown menus, etc. */
    var(--color-panel-solid);
    var(--color-panel-translucent);
    
    /* Form component backgrounds, such as text fields, checkboxes, select, etc. */
    var(--color-surface);
    
    /* Dialog overlays */
    var(--color-overlay);
    

### [Panel background](#panel-background)

The `panelBackground` prop controls whether panelled elements use a solid or a translucent background color. The default `translucent` value creates a subtle overlay effect:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme panelBackground="translucent">
    	<MyApp />
    </Theme>
    

### Sign up

Email address

Password[Forgot password?](#)

Create accountSign in

While `solid` is useful when you'd prefer to present information unobstructed.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme panelBackground="solid">
    	<MyApp />
    </Theme>
    

### Sign up

Email address

Password[Forgot password?](#)

Create accountSign in

[Customization](#customization)
-------------------------------

Radix Themes colors can be customized by overriding the corresponding CSS variables of the token system. Refer to the [source code](https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/styles/tokens/color.css) for the full list of the color tokens.

Make sure that your CSS is applied after the Radix Themes styles so that it takes precedence.

### [Brand color](#brand-color)

You can replace a specific color with your brand color by remapping the corresponding token. Usually, you’d override **step 9** of the scale that you are using as your theme accent.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--my-brand-color: #3052f6;
    	--indigo-9: var(--my-brand-color);
    	--indigo-a9: var(--my-brand-color);
    }
    

In this example, using solid-colored `indigo` components will now reference your custom color.

### [Custom palette](#custom-palette)

You can use the [custom color palette tool](/colors/custom) to generate a custom palette based just on a couple reference colors. Once you are happy with the result, paste the generated CSS into your project. You can rename the generated colors to match the accent that you want to use in your theme.

To generate dark theme colors, toggle the appearance to use the dark theme. Make sure to paste the generated CSS after your light theme color overrides.

[![](https://workos.imgix.net/images/4c48334e-feb3-4046-9569-bd695b174728.png?auto=format&fit=clip&q=80)](/colors/custom)[Create a custom palette →](/colors/custom)

### [Color aliasing](#color-aliasing)

You may prefer to use generic color names to refer to the color shades that you want to use. For example, it is common to refer to `crimson`, `jade`, and `indigo` as `red`, `green`, and `blue` respectively.

In this case, you can remap Radix Themes tokens in place of one another and reclaim the color names you want to use:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--red-1: var(--ruby-1);
    	--red-2: var(--ruby-2);
    	--red-3: var(--ruby-3);
    	--red-4: var(--ruby-4);
    	--red-5: var(--ruby-5);
    	--red-6: var(--ruby-6);
    	--red-7: var(--ruby-7);
    	--red-8: var(--ruby-8);
    	--red-9: var(--ruby-9);
    	--red-10: var(--ruby-10);
    	--red-11: var(--ruby-11);
    	--red-12: var(--ruby-12);
    
    	--red-a1: var(--ruby-a1);
    	--red-a2: var(--ruby-a2);
    	--red-a3: var(--ruby-a3);
    	--red-a4: var(--ruby-a4);
    	--red-a5: var(--ruby-a5);
    	--red-a6: var(--ruby-a6);
    	--red-a7: var(--ruby-a7);
    	--red-a8: var(--ruby-a8);
    	--red-a9: var(--ruby-a9);
    	--red-a10: var(--ruby-a10);
    	--red-a11: var(--ruby-a11);
    	--red-a12: var(--ruby-a12);
    
    	--red-surface: var(--ruby-surface);
    	--red-indicator: var(--ruby-indicator);
    	--red-track: var(--ruby-track);
    	--red-contrast: var(--ruby-contrast);
    }
    

In this example, using the `red` color in Radix Themes components and tokens would now reference the original `ruby` scale.

[Individual CSS files](#individual-css-files)
---------------------------------------------

Color definitions comprise around 20% of the total CSS size that Radix Themes ships with.

If you’d prefer to reduce your CSS bundle size and have access just to the colors you use, you can import the individual CSS files for each color module. Here’s a sample setup:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    // Base theme tokens
    import "@radix-ui/themes/tokens/base.css";
    
    // Include just the colors you use, for example `ruby`, `teal`, and `slate`.
    // Remember to import the gray tint that matches your theme setting.
    import "@radix-ui/themes/tokens/colors/ruby.css";
    import "@radix-ui/themes/tokens/colors/teal.css";
    import "@radix-ui/themes/tokens/colors/slate.css";
    
    // Rest of the CSS
    import "@radix-ui/themes/components.css";
    import "@radix-ui/themes/utilities.css";
    

Please note that the colors you didn’t import will still be accepted by the `color` prop in React. Also, make sure that your developer tooling [preserves](/themes/docs/overview/styling#nextjs-import-order) the order of the imported CSS files.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Overview](/themes/docs/theme/overview)

Next[Dark mode](/themes/docs/theme/dark-mode)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/color.mdx "Edit this page on GitHub.")