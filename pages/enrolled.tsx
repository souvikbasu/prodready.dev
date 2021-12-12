import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { date, tz, enrolled, error } = router.query;
  return (
    <div className="bg-darkbg h-auto w-max sm:w-full ">
      <div className="p-4">
        <Head>
          <title>React in Production</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen p-4 flex flex-col justify-center items-center w-full">
          <div className="max-w-lg md:max-w-2xl">
            {enrolled === "true" ? (
              date === "future" ? (
                <>
                  <h1>You are on my email list now</h1>
                  <div className="justify-center mt-20">
                    <p>
                      I have noted your email and will send you details about
                      future workshop. Thanks for your interest.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h1>Congrats! Your spot is reserved!</h1>
                  <div className="justify-center mt-20">
                    <p>
                      I have booked a spot for you on {date} for {tz} timezone.
                      I will send you details about the workshop and payment as
                      the dates nearby.
                    </p>
                  </div>
                </>
              )
            ) : (
              <>
                <h1>Umm! Something's not right!</h1>
                <div className="justify-center mt-20">
                  <p className="text-center">
                    {error ? error : "Please try to enrol again"}
                  </p>
                </div>
              </>
            )}{" "}
          </div>
        </main>

        <footer className="mt-8 sm:mt-16 max-h-screen flex p-4 border-t-2 border-gray-100 justify-center items-center">
          <div className="text-sm text-graytext">
            © 2021 Souvik Basu. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
