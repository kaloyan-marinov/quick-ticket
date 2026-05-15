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
> (
>
> For example, you can:
> 
> - fetch data and render a user's posts on the <u>server</u> (using «Server Components»),
>   then render the interactive `LikeButton` for each post on the <u>client</u> (using «Client Components»)
> 
> - create a `Nav` component that is rendered on the <u>server</u> and shared across pages,
>   but if you want to show an active state for links, you can render the list of `Links` on the <u>client</u>
>
> )
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



> once you make changes and save, you should notice the browser automatically updates to reflect the change.
> This feature is called [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh) It ... comes pre-configured with Next.js.


# Background 2

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
