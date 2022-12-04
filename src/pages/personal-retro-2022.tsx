// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import retro from "../images/retro.png"
import lessons from "../images/lessons.png"

import LandingPage from "../components/landing-page"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <LandingPage>
    <SEO title="Personal Retro 2022" />
    <div className="container max-w-xl mx-auto text-xl">
      <h1 className="text-center text-3xl mt-8 mb-12 font-medium text-gray-100">
        What lessons did you learn in 2022?
      </h1>
      <div className="relative pb-[62.5%] h-0">
        <iframe
          src="https://www.loom.com/embed/84fb332aa5e449b296ea69a6e6f515e7"
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <p className="mt-8 text-gray-300">
        If that's a difficult question for you to answer — you're not alone.
      </p>
      <p className="mt-8 text-gray-300">
        Reflecting on your past helps you grow.
      </p>
      <p className="mt-8 text-gray-300">
        It also helps you set the right goals for the future.
      </p>
      <p className="mt-8 text-gray-300 font-bold">
        Yet most people don't review their past year before they start the next.
      </p>
      <p className="mt-8 text-gray-300">
        Perhaps you're planning on setting goals for 2023. But did you also plan
        on doing a quick review of how 2022 actually went?
      </p>
      <p className="mt-8 text-gray-300">If not, why not?</p>
      <p className="mt-8 text-gray-300">I can think of several reasons.</p>
      <p className="mt-8 text-gray-300">
        😵‍💫 <strong>Reflecting, as an activity, can feel too open-ended.</strong>{" "}
        "How long should I reflect for?", "On what?", "Until which point?" You
        might not even know where to start.
      </p>
      <p className="mt-8 text-gray-300">
        <strong>
          🤔 Alternatively, it might feel unclear whether reflecting on your
          year will be time well spent.
        </strong>{" "}
        How do you know spending an hour contemplating your past year will bring
        you any benefit?
      </p>
      <p className="mt-8 text-gray-300">
        ⏱ Finally, <strong>reflecting properly takes time.</strong> It requires
        contemplation. But what if you don't have a clear and concise plan to
        follow? You might end up wasting a lot of time and effort.
      </p>
      <p className="mt-8 text-gray-300">
        So we've established that reflection can feel open ended 😵‍💫, it takes a
        lot of time ⏱ and it may feel unclear 🤔 whether it's worth it.
      </p>
      <p className="mt-8 text-gray-300">
        What do you typically do with a task that fits that description?
      </p>
      <p className="mt-8 text-gray-300">
        <strong>You procrastinate!</strong>
      </p>
      <p className="mt-8 text-gray-300">
        You may{" "}
        <i>
          <strong>want</strong>
        </i>{" "}
        to review your year, but{" "}
        <i>
          <strong>you end up not doing it</strong>
        </i>
        .
      </p>
      <p className="mt-8 text-gray-300">But what if...</p>

      <ul className="mt-8 text-gray-300 pl-8">
        <li className="mt-4 text-gray-300">
          ...you were guided through a step-by-step process, carefully designed
          to help you surface the most important insights in your past year?
        </li>
        <li className="mt-4 text-gray-300">
          ...you could simply join a Zoom call and leave with a clear picture of
          your key lessons for 2022 and how they could feed into your goals for
          2023?
        </li>
        <li className="mt-4 text-gray-300">
          ...you could do all of this in just 3 hours?
        </li>
      </ul>
      <p className="mt-8 text-gray-300">"Okay" you might say, "but how?"</p>
      <p className="mt-8 text-gray-300">
        This is where the Personal Retro comes in.
      </p>
      <h3 className="mt-12 text-2xl">The Personal Retro</h3>
      <img src={retro} className="mt-8 mb-8 rounded-xl" />
      <p className="mt-8 text-gray-300">
        The Personal Retro is an online retrospective workshop where we reflect
        on our past year, synchronously.
      </p>
      <p className="mt-8 text-gray-300">
        You join a group Zoom call and connect to our collaborative whiteboard.
      </p>
      <p className="mt-8 text-gray-300">
        On the whiteboard everyone gets their own workspace.
      </p>
      <p className="mt-8 text-gray-300">
        As your facilitator I'll guide you through a set of retrospective
        exercises whereby everyone works <i>in parallel</i>.
      </p>
      <p className="mt-8 text-gray-300">
        You review your own year and others review theirs. In case you're open
        to getting outside feedback, there will be specific exercises that allow
        for others to respond to certain parts of your work.
      </p>
      <h3 className="mt-12 text-2xl">Wait... What's a retrospective?</h3>
      <p className="mt-8 text-gray-300">
        If you're not familiar with term "Retrospective", here's a quick
        explainer.
      </p>
      <p className="mt-8 text-gray-300">
        The word retrospective comes from the Latin <i>retrospicere</i>, which
        means "to look back". It's a term that's been used in software
        development circles to denote a ceremony that is often performed at the
        end of a development iteration (a sprint in Agile terms).
      </p>
      <p className="mt-8 text-gray-300">
        During such a retrospective the team reviews how the past iteration went
        and what could be improved. Agile itself has its roots in Japanese
        manufacturing philosophy where the core tenet is continuous improvement
        ("kaizen").
      </p>
      <p className="mt-8 text-gray-300">
        The Personal Retro is analogous to this. You'll be reviewing your last
        year to assess how it went and what can be improved.
      </p>
      <p className="mt-8 text-gray-300">
        It's also different because we'll be reviewing not just professional
        performance but all aspects.
      </p>
      <h3 className="mt-12 text-2xl">Why do this in a group?</h3>
      <p className="mt-8 text-gray-300">
        It's 100% possible to do a retrospective by yourself, but doing it in a
        group setting gives you some added benefits:
      </p>
      <ul className="mt-8 text-gray-300 list-disc pl-8">
        <li className="mt-4 text-gray-300">
          A proven structure (no more open-endedness)
        </li>
        <li className="mt-4 text-gray-300">
          A little bit of healthy peer pressure for you to finish (no more
          procrastination)
        </li>
        <li className="mt-4 text-gray-300">
          A nice motivator by making it a lot of fun.
        </li>
      </ul>
      <h3 className="mt-12 text-2xl">What's the format exactly?</h3>
      <p className="mt-8 text-gray-300">
        We map the significant events of the past year on to a timeline.
      </p>
      <p className="mt-8 text-gray-300">
        We distinguish between positive and negative emotional charges.
      </p>
      <p className="mt-8 text-gray-300">
        We divide your year into periods to give you a structure to build on.
      </p>
      <p className="mt-8 text-gray-300">
        Then we pick a smaller selection of events which we'll mine for
        insights.
      </p>
      <p className="mt-8 text-gray-300">
        There'll be some solo exercises as well as interactions with your
        co-retro writers to help you get some outside perspective.
      </p>
      <p className="mt-8 text-gray-300">
        Then we're going to try and summarize our year. You'll end up with a one
        paragraph summary of your year's important events.
      </p>
      <h3 className="mt-12 text-2xl">Who am I?</h3>
      <p className="mt-8 text-gray-300">
        I'm Jesse and I'm a facilitator with a remote-first Web3 design studio
        called Deep Work Studio.
      </p>
      <p className="mt-8 text-gray-300">
        At Deep Work we run remote Product Design Sprints — 3-day workshops to
        collaboratively design a user interface — for Web3 startups and I get to
        facilitate many of them.
      </p>
      <p className="mt-8 text-gray-300">
        As such, facilitating events like these has become second nature for me.
      </p>
      <h3 className="mt-12 text-2xl">
        Here are the benefits of doing the Personal Retro
      </h3>
      <ul className="mt-8 list-disc text-gray-300 pl-8">
        <li className="mt-4 text-gray-300">
          Get a clear overview of what you did last year, professionally and
          privately
        </li>
        <li className="mt-4 text-gray-300">
          Get an understanding what events shaped your year and what lessons you
          took — or want to take – from them
        </li>
        <li className="mt-4 text-gray-300">
          Identify patterns over time, recurring themes in your life that are
          holding you back, or lifting you up
        </li>
        <li className="mt-4 text-gray-300">
          Uncover more insights by inviting outside perspectives
        </li>
        <li className="mt-4 text-gray-300">
          Identify areas where you're still a little lost and stuck and if
          you're willing and courageous enough, invite others to contribute
          their outside perspective
        </li>
        <li className="mt-4 text-gray-300">
          Generate ideas for your goal setting process of 2023
        </li>
        <li className="mt-4 text-gray-300">
          Start a review process and finish it with a tangible result
        </li>
        <li className="mt-4 text-gray-300">
          Start a feedback loop for your life
        </li>
      </ul>
      <p className="mt-8 text-gray-300">
        Pseudonymous friendly — if you don't want to reveal your real name or
        turn on your webcam, that's completely okay. I'll give special
        instructions for those who want to keep certain parts of their retro
        private as well.
      </p>
      <div className="text-center">
        <Link to="https://forms.gle/hLudCqixf5cqCdyF9" target="_blank">
          <button
            type="button"
            className="text-center mt-16 mb-16 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Book your Personal Retro ($0—$199*)
          </button>
        </Link>
      </div>
      <p className="text-gray-300 text-sm">
        * The Personal Retro is a <i>pay-what-you-want</i> product. You will be
        asked to pay after the retro is complete and you can choose to pay any
        amount you wish. Even $0. That said, the target price is $199 and if
        you're happy with the retro, and you can afford it, I suggest that's
        what you pay.
      </p>
    </div>
  </LandingPage>
)

export default SecondPage
