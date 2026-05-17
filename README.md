# Background 1

https://nextjs.org/docs

> Next.js has two different routers:
> 
> - «App Router»: The newer router that supports new React features like «Server Components».
> - «Pages Router»: The original router, still supported and being improved.
> 
> At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the «App Router» docs and the «Pages Router» docs.

https://nextjs.org/docs#pre-requisite-knowledge

> If you're new to React or need a refresher, we recommend starting with our [React Foundations course](https://nextjs.org/learn/react-foundations), and the [Next.js Foundations course](https://nextjs.org/learn/dashboard-app) that has you building an application as you learn.

https://nextjs.org/learn/react-foundations#prerequisite-knowledge

> If you're already familiar with React, you can skip to the [From React to Next.js](https://nextjs.org/learn/react-foundations/from-react-to-nextjs) chapter

https://nextjs.org/learn/react-foundations/from-react-to-nextjs

> When it comes to [building a new website or enhancing an existing one], ... You can gradually adopt React by using `<script>` tags ... to add small components to an existing website. However, many developers have found [it] valuable [for the end users and convenient for the developers] ... to write their whole frontend application in React.

https://nextjs.org/learn/react-foundations/from-react-to-nextjs#from-react-to-nextjs

> While React excels at building UI, ... There are ... newer React features, like «Server [Components]» and «Client Components», that require a framework... Next.js [is one such framework that] handles much of the setup and configuration [that are required in order to ...]

https://nextjs.org/learn/react-foundations/installation

> ...
>
> 4. [You can delete `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`] because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
>
> ...
> 
> The only code left in the HTML file is JSX, so you can change the file type from `.html` to `.js` or `.jsx`.

> Next.js uses [«file-based routing»]. This means that instead of using code to define the routes of your application, you can use folders and files.
>
> ...
>
> [`src/app/page.js` or `src/app/page.jsx` (or `app/page.js` or `app/page.jsx`)] will be the main page of your application [= it will be rendered when the client/browser accesses the `/` URL path]
>
> [`src/app/layout.js` or `src/app/layout.jsx` (or `app/layout.js` or `app/layout.jsx`)] is the main layout of your application. You can use it to add UI elements that are shared across all pages (e.g. navigation, footer, etc).

> This is because Next.js uses React «Server Components», a new feature that allows React to render on the server. «Server Components» don't support `useState`, so you'll need to use a «Client Component» instead.

https://nextjs.org/learn/react-foundations/server-and-client-components

> [Before explaining how «Server Components» and «Client Components»] work, it's helpful to be familiar with two foundational web concepts:
> 
> - The «environments» your application code can be executed in: the <u>server</u> and the <u>client</u>.
> - The «network boundary» ...
>
> ---
> 
> In the context of web applications:
> 
> - The <u>server</u> refers to the computer in a data center that stores your application code, receives requests from a <u>client</u>, does some computation, and sends back an appropriate response [to that <u>client</u>].
> 
> - The <u>client</u> refers to the browser on a user’s device that sends a request to a <u>server</u>, [... receives a response from the <u>server</u>, and] then turns the response ... into an interface the user can interact with.
> 
> Each environment has its own set of capabilities and constraints. For example:
> 
> - by moving rendering and data fetching to the <u>server</u>, you can reduce the amount of code sent to the <u>client</u>, which can improve your application's performance
> 
> - to make your UI interactive [which is an example of managing user state], [the relevant code needs to be (sent by the <u>server</u> to and) executed] on the <u>client</u>
>
> ---
>
> The «network boundary» is a conceptual line that separates the different «environments».

> In React, you choose where to place the «network boundary» in your component tree.
> 
> ---
>
> For example, you can:
> 
> - fetch data and render a user's posts on the <u>server</u> (using «Server Components»),
>   then render the interactive `LikeButton` for each post on the <u>client</u> (using «Client Components»)
> 
> - create a `Nav` component that is rendered on the <u>server</u> and shared across pages,
>   but if you want to show an active state for links, you can render the list of `Links` on the <u>client</u>
>
> ---
> 
> Behind the scenes, the components are split into two «module graphs».
> The «server module graph (or tree)» contains all the «Server Components» that are rendered on the <u>server</u>, and «the client module graph (or tree)» contains all «Client Components».
> 
> After «Server Components» are rendered, a special data format called the «React Server Component Payload (RSC)» is sent to the <u>client</u>. The «RSC payload» contains:
> 
> 1. The rendered result of «Server Components».
> 
> 2. Placeholders (or holes) for where «Client Components» should be rendered
>    and
>    references to their JavaScript files.
> 
> React uses this information to consolidate the «Server [Components]» and «Client Components»
> [in order to ultimately] update the DOM on the «client».

> Next.js uses «Server Components» by default - ... you don't have to take additional steps to adopt them
>
> to make [a particular React component into] a «Client Component»,
> add the React `'use client'` directive at the top of the file [in which the component is defined]
>
> once you make changes and save, you should notice the browser automatically updates to reflect the change.
> This feature is called [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh).
> It ... comes pre-configured with Next.js.



# Background 2

https://react.dev/reference/rsc/directives

> Directives provide instructions to [bundlers compatible with React «Server Components»](https://react.dev/learn/creating-a-react-app#full-stack-frameworks).
>
> ---
>
> Source code directives:
> - `'use client'` lets you mark what code runs on the client.
> - `'use server'` marks server-side functions that can be called from client-side code.

<u>from the preceding link:</u>

> If you want to build a new app or website with React, we recommend starting with a framework.
>
> If your app has constraints not well-served by existing frameworks ... or you just want to learn the basics of a React app, you can [build a React app from scratch](https://react.dev/learn/build-a-react-app-from-scratch).
>
> ---
>
> These recommended [full-stack] frameworks support all ... the latest React features and take advantage of React’s architecture.
>
> Full-stack frameworks do not require a server.
>
> All the frameworks on this page support client-side rendering ([CSR](https://developer.mozilla.org/en-US/docs/Glossary/CSR)), single-page apps ([SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA)), and static-site generation ([SSG](https://developer.mozilla.org/en-US/docs/Glossary/SSG)). These apps can be deployed to a [CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN) or static hosting service without a server. Additionally, these frameworks allow you to add server-side rendering on a per-route basis, when it makes sense for your use case.
>
> This allows you to start with a client-only app, and if your needs change later, you can opt-in to using server features on individual routes without rewriting your app. See your framework’s documentation for configuring the rendering strategy.
>
> ---
>
> ...
>
> [Next.js’s App Router](https://nextjs.org/docs) is a React framework that takes full advantage of React’s architecture to enable full-stack React apps.
>
> ...
>
> [React Router](https://reactrouter.com/start/framework/installation) is the most popular routing library for React and can be paired with Vite to create a full-stack React framework.
>
> ...
>
> ---
>
> [Which features make up the React team’s full-stack architecture vision?](https://react.dev/learn/creating-a-react-app#which-features-make-up-the-react-teams-full-stack-architecture-vision)
>
> Next.js’s App Router bundler fully implements the official [React Server Components specification](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md).
>
> Next.js’s App Router also integrates [data fetching with Suspense](https://react.dev/blog/2022/03/29/react-v18#suspense-in-data-frameworks).
>
> Server Components and Suspense are React features rather than Next.js features. However, adopting them at the framework level requires buy-in and non-trivial implementation work. At the moment, the Next.js App Router is the most complete implementation. The React team is working with bundler developers to make these features easier to implement in the next generation of frameworks.

https://react.dev/reference/rsc/use-client

Add `'use client'` at the top of a file to mark the module and its transitive dependencies as client code.

Code that is marked for client evaluation is not limited to components. All code that is a part of the Client module sub-tree is sent to and run by the client.

Note that a single module may be evaluated on the server when imported from server code and on the client when imported from client code.

---

[Modern React apps are] server-rendered by default. `'use client'` introduces a «network boundary» in the module dependency tree



[W.r.t. components:]

As in any React app, parent components pass data to child components. As they are rendered in different «environments», passing data from a Server Component to a Client Component requires extra consideration.

Prop values passed from a Server Component to Client Component must be serializable.



[More generally:]

When a server evaluated module imports values from a `'use client'` module, the values must either be a React component or supported serializable prop values to be passed to a Client Component.

---

here is a brief overview of the advantages and limitations to Server Components to determine when you need to mark something as client[-evaluated]

For simplicity, we talk about Server Components, but the same principles apply to all code in your app that is server run.

Advantages of Server Components

- Server Components can reduce the amount of code sent and run by the client.
  Only Client modules are bundled and evaluated by the client.

- Server Components benefit from running on the server.
  They can access the local filesystem
  and
  may experience low latency for data fetches and network requests.

Limitations of Server Components 

- Server Components cannot support interaction
  as event handlers must be registered and triggered by a client.
  
  For example, event handlers like `onClick` can only be defined in Client Components.

- Server Components cannot use most Hooks.

  When Server Components are rendered,
  their output is essentially a list of components for the client to render.
  Server Components do not persist in memory after render and cannot have their own state.

https://react.dev/reference/rsc/use-server

`'use server'` marks server-side functions that can be called from client-side code...
We call these functions [Server Functions](https://react.dev/reference/rsc/server-functions).

When calling a Server Function on the client, it will make a network request to the server that includes a serialized copy of any arguments passed. If the Server Function returns a value, that value will be serialized and returned to the client.

Server Functions are exposed server endpoints and can be called anywhere in client code.

- Because the underlying network calls are always asynchronous, `'use server'` can only be used on async functions.

- Server Functions should be called in a [Transition](https://react.dev/reference/react/useTransition). Server Functions passed to [`<form action>`](https://react.dev/reference/react-dom/components/form#props) or [`formAction`](https://react.dev/reference/react-dom/components/input#props) will automatically be called in a transition.

- Server Functions are designed for mutations that update server-side state; they are not recommended for data fetching. Accordingly, frameworks implementing Server Functions typically process one action at a time and do not have a way to cache the return value.

---

Security considerations

Arguments to Server Functions are fully client-controlled. For security, always treat them as untrusted input, and make sure to validate and escape arguments as appropriate.

In any Server Function, make sure to validate that the logged-in user is allowed to perform that action.

---

[Arguments and return values of server functions must be serializable]

Since client code calls the Server Function over the network, any arguments passed will need to be serializable.

Supported serializable return values are the same as [serializable props](https://react.dev/reference/rsc/use-client#serializable-types) for a boundary Client Component.

To read a Server Function return value, you’ll need to `await` the promise returned.

---

Usages



Calling a Server Function outside of `<form>`

When using a Server Function outside a [form](https://react.dev/reference/react-dom/components/form), call the Server Function in a [Transition](https://react.dev/reference/react/useTransition), which allows you to display a loading indicator, ..., and handle unexpected errors.



Server Functions in forms

The most common use case of Server Functions will be calling functions that mutate data. On the browser, the [HTML form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) is the traditional approach for a user to submit a mutation.

When calling a Server Function in a form, React will supply the form’s [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) as the first argument to the Server Function.

To update the UI based on the [return value] of a Server Function ..., use [`useActionState`](https://react.dev/reference/react/useActionState).

Forms will automatically wrap Server Functions in transitions.



# Background 3

https://react.dev/reference/rsc/server-components

A common misunderstanding is that Server Components are denoted by `"use server"`, but there is no directive for Server Components. The "`use server"` directive is used for Server Functions.

---

Server Components are a new type of Component that renders ahead of time, before bundling, in an environment separate from your client app...

This separate environment is the “server” ... React Server Components ... can run once at build time on your CI server, or they can be run for each request using a web server.

---

the Server Component ... is an async function

\=

Server Components ... allow you to `await` in render.

---

Usages:

1. Server Components with a Server

   Without Server Components, it’s common to fetch dynamic data on the client in an Effect
   [which issues an HTTP request to a backend API (in order to access your project's data layer)]

   ---

   Server Components can also run on a web server during a request for a page, letting you access your data layer without having to build an API. They are rendered before your application is bundled, and can pass data and JSX as props to [child components].

   The bundler then combines the data, rendered Server Components ... into a bundle. Optionally, that bundle can then be server-side rendered (SSR) to create the initial HTML for the page. When the page loads, the browser does not see the original [server components]; only the rendered output is sent to the client:

   ```html
   <div>
    <span>By: The React Team</span>
    <p>React 19 is...</p>
   </div>
   ```

2. Adding interactivity to Server Components 

   Server Components are not sent to the browser, so they cannot use interactive APIs like `useState`. To add interactivity to Server Components, you can compose them with Client Component using the `"use client"` directive.

   This works by first rendering [the parent component as a] Server Component, and then instructing the bundler to create a bundle for [all its child components that encapsulate mechanisms for interactivity and, due to that, are implemented as Client Components]. In the browser, [child] Client Components can see [dynamic data that was fetched within] the Server Components [in the form of props]:

   ```html
   <head>
     <!-- the bundle for Client Components -->
     <script src="bundle.js" />
   </head>
   <body>
     <div>
       <Expandable key={1}>
         <p>this is the first note</p>
       </Expandable>
       <Expandable key={2}>
         <p>this is the second note</p>
       </Expandable>
       <!--...-->
     </div>
   </body>
   ```

3. a new way to write Components using async/await

   When you `await` in an async component, React will suspend and wait for the promise to resolve before resuming rendering. This works across server/client boundaries with streaming support for `Suspense`.

   You can even create a promise on the server, and await it on the client...

   > On the client:
   >
   > - async components are not supported
   >
   > - any promise,
   >   which a client component has received as a prop,
   >   has to be awaited with the `use` function from React

4. fetch static content ... that will not change for the lifetime of the page

   Without Server Components, it’s common to fetch static data on the client with an Effect:
   [e.g. the client issues an HTTP request to a backend API for a static Markdown file;
   downloads `marked` (= a library for parsing the Markdown content into HTML content)
   and `sanitize-html` (= a library for sanitizing HTML content);
   calls `sanitizeHtml(marked(markdownContent))` and renders its result]

   ---

   Server components can run at build time to read from the filesystem or fetch static content, so a web server is not required.

   you can render these components once at build time...

   The rendered output can then be server-side rendered (SSR) to HTML and uploaded to a CDN. When the app loads, the client will not see the original [server component], or the expensive libraries for rendering the [Markdown content]. The client will only see the rendered output:
   
   ```html
   <div>
      <!-- html for markdown -->
    </div>
   ```

   This means the content is visible during first page load, and the bundle does not include the expensive libraries needed to render the static content.



# Background 4

... Next.js uses «file-based routing».
[What that means is that]
the [`src/app`] folder is ... your «routing folder»
[which in turn means that]
the [`src/app/page.tsx`] is your homepage;
if you wanted, let's say, [a] `/about` [URL],
you would create an [`src/app/about`] folder with a `page.tsx` in that ... folder
and that would ... show up at [the] `/about` [URL].

And all the pages are ... React components.



```shell
2026-05-12-22-53-36-CET quick-ticket $ git commit -m "create a migration script and apply it = run \`npx prisma migrate dev --name first_migration\`"
[main 22db976] create a migration script and apply it = run `npx prisma migrate dev --name first_migration`
 2 files changed, 15 insertions(+)
 create mode 100644 prisma/migrations/20260512205335_first_migration/migration.sql
 create mode 100644 prisma/migrations/migration_lock.toml
2026-05-12-22-55-40-CET quick-ticket $ npx prisma generate
Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (6.19.3) to ./src/generated/prisma in 21ms
```


A «server action» is a file that, as the name suggests, run on the server.
HTML `<form>` elements can submit directly to a «server action».



`src/components/` contains UI components,
which are common
and
don't have anything to do with specific pages



W.r.t. authentication, you have a lot of different options:

- you can use «Next Auth», which is very popular

- you can use a library like `auth0-js`

- you can use https://clerk.com/

- you can put in place a custom authentication flow using JSON Web Tokens (JWTs)

  - e.g. a package called `jose` makes it possible to create and sign JWTs

  - `jose` is very similar to the `jsonwebtoken` package

  - `bcryptjs` can be used to encrypt passwords

  - the JTW can be stored in [an `HttpOnly` cookie](
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly
    )

- this project puts in a place the following custom authentication flow:

  1. Log in with `(email, password)`

  2. Server checks those credentials

  3. Create a JWT (which is cryptographically signed).
     Store it in cookie (and[/or] store it also in [the client's = the web browser's] «local storage».

  4. The client sends the cookie as part of each future request

  5. The server verifies the token (within the cookie)
     and
     makes sure it has not been tampered with



  > low-level functions:
  > 
  > `src/lib/auth.ts`
  > 
  > ---
  > 
  > high-level functions:
  > 
  > ```ts
  > registerUser
  > 
  > loginUser
  > 
  > logoutUser
  > 
  > getCurrentUser
  > ```



[What is Session Replay?](
  https://docs.sentry.io/product/explore/session-replay/web/
)

A session replay is *not* a video recording. It's a video-like reproduction of a user session, built using the [rrweb recording library](
  https://www.rrweb.io/
). Replays are created from snapshots of your web application's DOM state (the browser's in-memory representation of HTML). When each snapshot is played back, you'll see a video-like recording of what the user did throughout their entire session. The user session includes any pageloads, refreshes, and navigations that happened while the user was on your site.



<br />
<br />
<br />
<hr />
<br />
<br />
<br />



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

```shell
cp \
    .env.template \
    .env
```

Edit the `.env` file by filling out the values for all variables therein.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
