import type { NextPage } from "next";
import Head from "next/head";
import RegisterEmail from "../components/RegisterEmail";

const Home: NextPage = () => {
  return (
    <div className="bg-darkbg h-auto w-max sm:w-full ">
      <div className="p-4">
        <Head>
          <title>React in Production</title>
          <meta
            name="description"
            content="Learn how to create a React app that is ready for production"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen p-4 flex flex-col justify-center items-center w-full">
          <div className="max-w-lg md:max-w-2xl">
            <h1>React in Production</h1>
            <h2 className="text-center">
              Take your React skills to the next level
            </h2>
            <div className="justify-center mt-20">
              <h3>Still feel nervous to deploy your React app to Prod?</h3>
              <p>
                As I talk to more and more developers who are either students,
                working as interns, or even working as full-time employees with
                big organizations, I see that there is a gap in understanding of
                how to deploy a professional-grade React app in production.
                Indeed your React app works fine on localhost but before
                deploying your app to prod, have you given a thought to
              </p>
              <p>
                <ul>
                  <li>How to load your app in under a second?</li>
                  <li>
                    How to profile your app to discover performance bottlenecks?
                  </li>
                  <li>How to cache your images?</li>
                  <li>Rank your page on Google/Bing first page?</li>
                  <li>How to debug an issue when reported by your customer?</li>
                  <li>
                    How to split your modules well to reduce payload size?
                  </li>
                  <li>Tune your webserver to compress responses?</li>
                  <li>Take care of security to tackle malicious attacks?</li>
                  <li>How to authenticate your users?</li>
                  <li>Take care of GDPR and Privacy law compliance?</li>
                  <li>
                    Testing your app cross-browser and across different display
                    sizes?
                  </li>
                  <li>Manage application state</li>
                  <li>Styling strategy?</li>
                  <li>Internationalization?</li>
                  <li>Accessibility?</li>
                  <li>CI/CD pipeline?</li>
                  <li>Deployment strategies?</li>
                  <li>Analyzing users' behavior on the site?</li>
                  <li>Perform A/B testing?</li>
                  <li>Handle scale?</li>
                </ul>
              </p>
              <p>
                If these points (and more such concerns) feel valid to you then
                enroll for this 2-day interactive workshop to learn about how to
                build a React app that is prod ready.
              </p>
              <p>
                The first batch starts on 18-19th Dec 2021. Duration is 4 hours
                each day. Workshop will be repeated twice on both the days to
                accomodate different timezones.
              </p>
              <h3 className="mt-16">Pay later</h3>
              <p>
                You can save your spot now and pay later. I will send you a
                payment link 2 days before the workshop. You may cancel and
                release your spot anytime before you pay. Just drop me a mail at
                souvik.basu@shoonya.ca if your plans change.
              </p>
            </div>
            <RegisterEmail />
            <div className="justify-center mt-20">
              <h3 className="mt-8">Giving back to the community</h3>
              <p>
                Whatever I am today is because of the support I have received
                from the society and I strongly believe to give back to the
                community in whichever small way possible. With that intent, I
                will waive off 100% of the fee if you donate the equivalent
                amount to a charity of your choice for any cause that is close
                to your heart. Even donations done to individuals in need will
                count. Just let me know the details in mail.
              </p>
            </div>
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
