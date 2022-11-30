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
      <img src={lessons} className="mt-8 mb-8 rounded-xl" />
      <p className="mt-8 text-gray-300">
        If that's a difficult question for you to answer — you're not alone.
      </p>
      <p className="mt-8 text-gray-300">
        Reflecting on your past helps you grow.
      </p>
      <p className="mt-8 text-gray-300 font-bold">
        Yet most people don't review their past year before they start the next.
      </p>
      <p className="mt-8 text-gray-300">
        Perhaps you're planning on setting goals for 2023. But did you also plan
        on doing a quick review of how 2022 actually went?
      </p>
      <p className="mt-8 text-gray-300">Why not?</p>
      <p className="mt-8 text-gray-300">There may be several reasons.</p>
      <p className="mt-8 text-gray-300">
        😵‍💫 <strong>Reflecting, as an activity, can feel too open-ended.</strong>{" "}
        How long should I reflect for? On what? Until which point? You might not
        even know where to start.
      </p>
      <p className="mt-8 text-gray-300">
        <strong>
          🤔 Alternatively, it might feel unclear whether reflecting on your
          year will be time well spent.
        </strong>{" "}
        How do you know spending an hour on a couple of questions will be worth
        it?
      </p>
      <p className="mt-8 text-gray-300">
        ⏱ Finally, <strong>reflecting properly takes time.</strong> It requires
        contemplation. But what if you don't have a clear and concise plan to
        follow? You might end up wasting a lot of time and effort.
      </p>
      <p className="mt-8 text-gray-300">
        So we've established that reflection can feel 😵‍💫 open ended, it takes a
        lot of time ⏱ and it can feel unclear 🤔 if it's worth it.
      </p>
      <p className="mt-8 text-gray-300">
        What do you typically do with a task that fits that description?
      </p>
      <p className="mt-8 text-gray-300">
        <strong>You procrastinate!</strong>
      </p>
      <p className="mt-8 text-gray-300">
        You may want to review your year, but you end up not doing it.
      </p>
      <p className="mt-8 text-gray-300">
        But what if you were guided through a clear step-by-step proven process
        which was designed to help surface the insights that help us grow? What
        if you could simply join a Zoom call and by the time you hang up you've
        got an accurate and helpful summary of the key lessons of how your last
        year went personally and professionally?
      </p>
      <p className="mt-8 text-gray-300">"Okay" you might say, "but how?"</p>
      <p className="mt-8 text-gray-300">
        This is where the Personal Retro comes in.
      </p>
      <h3 className="mt-8 text-2xl">The Personal Retro</h3>
      <img src={retro} className="mt-8 mb-8 rounded-xl" />
      <p className="mt-8 text-gray-300">
        The Personal Retro is an online retrospective workshop where we reflect
        on the past year in parallel. You join a group Zoom call as well as a
        single large collaborative online whiteboard. On the whiteboard everyone
        gets their own little space and as your facilitator I'll guide you
        through a set of retrospective exercises while everybody works in
        parallel.
      </p>
      <h3 className="mt-8 text-2xl">Wait... What's a retrospective?</h3>
      <p className="mt-8 text-gray-300">
        If you're not familiar with term "Retrospective", here's a quick
        explainer. The word retrospective comes from the Latin retrospicere,
        which means to look back. It's a term that's been used in software
        development circles to denote a ceremony that is often performed at the
        end of a development iteration (a sprint in Agile terms). During such a
        retrospective the team reviews how the past iteration went and what
        could be improved. Agile itself has its roots in Japanese manufacturing
        philosophy where the core tenet is continuous improvement ("kaizen").
      </p>
      <h3 className="mt-8 text-2xl">Why do this in a group?</h3>
      <p className="mt-8 text-gray-300">
        It's 100% possible to do a retrospective by yourself, but doing it in a
        group setting gives you some added benefits:
      </p>
      <ul className="mt-8 text-gray-300 list-disc">
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
      <h3 className="mt-8 text-2xl">What's the format exactly?</h3>
      <p className="mt-8 text-gray-300">
        I've come up with a format which is quite simple. We map the significant
        events of the past year on to a timeline. We distinguish between good
        and bad experiences. We divide your year into periods to give you a
        structure to build on. Then we pick a smaller selection of events which
        we'll mine for insights. There'll be some solo exercises as well as
        interactions with your co-retro writers to help you get some outside
        perspective. Then we're going to try and summarize our year. You'll end
        up with a one paragraph summary of your year.
      </p>
      <p className="mt-8 text-gray-300">
        One last difference with an Agile Retrospective is that an Agile
        Retrospective typically appeals to your headalone. Your pre-frontal
        cortex is only a small part of your year, so I'm interested in using our
        bodies and emotional brains to pull up information as well for us to
        consider. I draw from a range of sources such as Jordan Peterson's Self
        Authorship Program, Deep Work Studio, Agile Retrospectives and my
        personal experience with meditation, ceremonies and psychedelics.
      </p>
      <h3 className="mt-8 text-2xl">
        Here are the benefits of doing the Personal Retro
      </h3>
      <ul className="mt-8 list-disc text-gray-300">
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
