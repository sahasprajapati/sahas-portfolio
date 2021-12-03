import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type props = {
  children?: ReactNode;
};
export default function ContainerBlock({ children, ...customMeta }: props) {
  const router = useRouter();

  const meta = {
    title: "Sahas Prajapati",
    description: "",
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://sahasp.com.np${router.asPath}`}
        />
        <link rel="canonical" href={`https://sahasp.com.np${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sahas Prajapati" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@pjpt_sahas" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <div className=" flex flex-col h-screen justify-between bg-gray-50 dark:bg-gray-800 w-full">
        <Navbar />
        <main className="">{children}</main>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
