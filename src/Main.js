import React from "react";

const Main = () => {
  return (
    <div>
      <h2>Welcome to the Premiere Reveal of Apple iHealthcare</h2>

      <p>
        We know it's a mouthful. Introducing: the all new, improved, efficient,
        clean, gluten-free, no greenhouse gas, vegetarian, GMO-free organic bona
        fide all-American USA-sourced medical healthcareness. Believe it or not:
        we have patients. We have providers. We serve static files through the
        native create-react-app public folder. We even have a fucking Contact
        page. Get the most out of your experience with Apple iHealthcare today.
        We know you will truly love the experience.
      </p>
      <p>
        Apple iHealthcare has you covered. Ask yourself: what can Apple do for
        me?
        <ul>
          <li>
            Need another insurance plan whose intricate semantics and non-pedestrian lexicon
            intimidates you to your core?
            We got you.
          </li>
          <li>
            Looking for a physician who respects your money (almost a little too much) but not your time? Already
            on it.
          </li>
          <li>
            Want a database filled with compromising patient data that violates every
            HIPPA policy in the handbook? You don't need to ask us twice!
          </li>
        </ul>
      </p>
      <em>
        <h5>It's time to go green. Go to the Next Level. Go lang.</h5>{" "}
        <h4>
          <strong> GO APPLE iHEALTHCARE </strong>
        </h4>
      </em>

      <p>
        TESTING TIME.
        <img src={process.env.PUBLIC_URL + "/pic2.jpeg"} alt="Get_fucked" />
        {/* <img src={process.env.PUBLIC_URL + "/pic1.jpeg"} alt="Get_fucked"/> */}
      </p>
    </div>
  );
};

export default Main;
