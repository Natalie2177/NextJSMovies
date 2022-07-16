import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
      <meta charset="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Search for movies and serials" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <title>Movie search</title>
      </Head>
      
    </>
  )
}
