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
        We know you will truly love the experience. Make health as painless as using SQL
        without Sequelize. With Apple iHealthcare, you can even center divs. That's fucking right.
      </p>
      <div>
        Apple iHealthcare has you covered. Ask yourself: what can Apple iHealthcare do for
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
      </div>
      <em>
        <h5>It's time to go Green. Go to the Next Level. Go Lang.</h5>{" "}
        <h4>
          <strong> GO APPLE iHEALTHCARE </strong>
        </h4>
      </em>

      <p><em>

        Enjoy this shutterstock-free .jpeg resembling what appears to be a typical
        turquoise-laden surgical team taken from an exceptionally awkward angle.
        Here at Apple iHealthcare, we give you what you want, AND MORE.
      </em>
      </p>
      <p>
        <img src={process.env.PUBLIC_URL + "/pic2.jpeg"} alt="Doctor Time Baby" />
        {/* <img src={process.env.PUBLIC_URL + "/pic1.jpeg"} alt="Get_fucked"/> */}
      </p>

        Next time you think about hospitals, stethoscopes, diabetus, scurvy or dirty syringes,
        we hope you can think of us instead. Enjoy the following misunderstood benefits:
        <ul>
            <li><strong>Going to receive a vasectomy anyways? Apply now and receive a BONUS pap smear during the same operation for FREE! </strong><br/> <small><em>Promotion is limited to one per customer.</em></small>  </li>
            <li><strong>Want a regular check-up for both your son and mother? Sign up today to gift a 50% off colonoscopy referral for whichever family member of your choosing!</strong> <br/> <small><em>We are not responsible for any forms of familial discord that erupts when you try to gift your father-in-law a rectal exam</em></small>  </li>
            <li><strong>Need a quick pick-me-up OTC for your seasonal allergies, cold, or flu? We have experimental monoclonal antibody angiotensin converting enzyme inhibitor antibiotics for NEW customers only!</strong><br/> <small><em>We do not take any liability for inevitable instances of iatrogenic MRSA and eventual death.</em></small>  </li>
        </ul>

        <h3>Our team is happy to help you wherever, whenever, whatever, whomever, whyever. Apple iHealthcare </h3>

        <img src={process.env.PUBLIC_URL + "/pic1.jpeg"} alt="Cameras belong at the waist" />

    </div>
  );
};

export default Main;
