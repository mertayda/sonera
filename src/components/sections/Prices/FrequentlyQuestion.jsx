import React from "react";
import Accordion from "../../accordion/Accordion";

const data = [
  {
    title: "Which Plan Is Right For Me?",
    p: "With any financial product that you buy, it is important that you know you are getting the best advice from a reputable company as often you will have to.",
  },
  {
    title: "Do I Need A Long-Term Contract?",
    p: "You are not required to commit to a long-term contract. Our plans are designed to stay flexible, allowing you to scale up or down depending on your needs.",
  },
  {
    title: "How Secure Is My Personal Information?",
    p: "We use industry-standard encryption and follow strict data protection policies to ensure that all your personal and financial information remains secure at all times.",
  },
  {
    title: "Can I Upgrade Or Downgrade My Plan Anytime?",
    p: "Yes, you can adjust your plan whenever your requirements change. All modifications are processed instantly without interruption to your service.",
  },
  {
    title: "Are There Any Hidden Fees?",
    p: "No. All our pricing is fully transparent. You will always know exactly what you are paying for without unexpected charges or hidden transaction fees.",
  },
  {
    title: "What Kind Of Support Do You Offer?",
    p: "Our support team is available 24/7 to provide guidance, troubleshoot issues, and ensure that you receive immediate help whenever you need it.",
  },
  {
    title: "Is This Service Suitable For Small Businesses?",
    p: "Absolutely. Our plans are tailored to support both individuals and small businesses by offering scalable features that grow with your operations.",
  },
  {
    title: "How Do I Know If I'm Choosing The Right Plan?",
    p: "You can speak with one of our advisors for a personalized assessment. They will help you evaluate your goals, budget, and usage to recommend the most efficient option.",
  },
];

const FrequentlyQuestion = () => {
  return (
    <section className="frequent">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="text-center text-white my-5">
              <h2 className="fs-1 fw-semibold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="fs-5 text-light">What are you looking for?</p>
            </div>
          </div>
          <Accordion className="test" data={data}></Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestion;
