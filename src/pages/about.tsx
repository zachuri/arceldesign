import React from "react";
import { MainLayout } from "../components/layout";
import Head from "next/head";
import Fadeup from "../components/layouts/fadeup";

function Title() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex flex-col items-center justify-center space-y-3">
        <li className="uppercase">
          Arcel R Punsalang, CID - Commercial Assoc. IIDA
        </li>
        <li>Principal - Lead Designer</li>
        <li>Adjunct Interior Designer Professor</li>
        <li>
          Inland Empire City Center IIDA Student Affairs Liaison 2014-2018
        </li>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <>
      <h1 className="text-4xl font-bold">Services Focus</h1>
      <h3 className="text-2xl">Limitless Possibilites</h3>
      <div>
        <ul className="list-disc space-y-3">
          <li>Design Concepts Development</li>
          <li>Progamming | Space Evaluation</li>
          <li>Conceptual Space Planning</li>
          <li>Interior Construction Drawings</li>
          <li>Interior Finish Specification</li>
          <li>Furniture, Furnishings, & Equipment</li>
          <li>Custom Millwork & Drawing Details</li>
          <li>Engineering Consultant Services</li>
          <li>Building Permit Processing</li>
          <li>Project Management</li>
          <li>Construction Cost Coordination</li>
          <li>Construction Administration</li>
          <li>ADA Compliance Evaluation</li>
        </ul>
      </div>
    </>
  );
}

const About = () => {
  return (
    <>
      <Fadeup>
        <Head>
          <title>ARCELDESIGN, INC. | About</title>
          <meta name="description" content="About" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainLayout>
          <article className="mx-5 flex flex-col items-center justify-center pt-5 text-[#FFFFFB]">
            <div className="sm:max-w-2xl">
              <Title />

              <h1 className="my-5 text-3xl font-bold">
                About ArcelDesign, Inc.
              </h1>

              <p className="my-5">
                <span className="font-bold">ArcelDesign, Inc.</span>, located in
                the City of Industry, offers a complete range of interior desian
                services. ArcelDesign, Inc., specializes in healthcare (i.e.
                medical, dental, chiropractic and optometry offices), corporate,
                hospitality and recreational/ residential living, including
                other areas of expertise.
              </p>

              <p className="my-5">
                Founder of ArcelDesign, Inc..{" "}
                <span className="font-bold">Arcel R. Punsalang</span>, is a
                Certified Interior Designer in the State of California (#6911)
                with the Bachelor Science degree in Civil Engineering and dearee
                in Interior Desion. Alona with his team of design professionals,
                are all about long-term client relationships Delivering design
                excellence is only the beginning. Trust comes with being able to
                deliver a service that consistently meets schedules. budaets and
                quality - our rewards speak on behalf of our performance{" "}
                <span>&#40;</span>2008 Winner IIDA Design Competition. 2010,
                2011, 2013 & 2014 Calibre Design Competition Nominee
                <span>&#41;</span>. in addition. ArcelDesign, Inc., brings
                talent and imagination to projects, setting innovative trends
                while understanding balance within the traditional and
                contemporary approaches to design.
              </p>

              <p className="my-5">
                <span className="font-bold">ArcelDesign, Inc.</span> understands
                that the function, structure and incorporating lasting aesthetic
                are fundamentals to creating a lasting and timeless environment,
                one that captures, uplifts and successfully impacts design
                perceptions.
              </p>

              <p className="my-5">
                <span className="font-bold">ArcelDesign Philosophy</span> "Allow
                the design process to evolve with an open mind." Charles Allem
                ArcelDesign's philosophy reflects Allem's values of imovation
                and imitless creativity to bring together a specially tailored
                and cohesive environment.
              </p>

              <p className="my-5">
                Creating a successful design is based on our philosophy of
                client and desianer partnership followed by ownership. Together
                we build trust, and then we take ownership, always. Through
                partnership, we understand our client's business needs. allowing
                us to custom a design that is specifically tailored to their
                needs. In addition, our commitment to excellence is not only a
                reflection on our client's business, but of our own creativity
                and who we are. This is why we are proud of our work.
              </p>

              <p className="my-5">
                Understanding our client's business and with an open mind, our
                designs evolve, allowing our work to express the timelessness,
                simplicity and grace, imbuing our creative genius.
              </p>
              <Services />
            </div>
          </article>
        </MainLayout>
      </Fadeup>
    </>
  );
};

export default About;
