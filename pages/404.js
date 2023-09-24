import Head from "next/head";

export default function NotFound404() {
    return (
        <div>
            <Head>
                <title>Not Found</title>
            </Head>
            <div className="w-full h-screen text-white flex flex-col justify-center items-center">
                <h1 className="text-xl ">404 - Page Not Found</h1>
                <a href="superhomes.co/">Return to Home </a>
            </div>
        </div>
    )
}