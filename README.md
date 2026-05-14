# Background

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
