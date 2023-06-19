import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <ScrollArea>
      <div className="flex gap-y-6 flex-col text-justify">
        <h1 className="text-neutral-400 text-xl sm:text-3xl font-semibold">
          Welcome to our Blog Company!
        </h1>

        <p className="sm:text-base text-sm">
          At our core, we are passionate storytellers and avid content creators
          who believe in the power of words. Our mission is to inspire, educate,
          and entertain our readers through engaging and thought-provoking blog
          posts.
        </p>

        <p className="sm:text-base text-sm">
          {` We strive to provide a diverse range of topics that cater to various
  interests and curiosities. Whether you're seeking insightful articles on
  technology, helpful tips for personal growth, mouthwatering recipes,
  travel experiences, or even the latest trends in fashion and beauty,
  we've got you covered.`}
        </p>

        <p className="sm:text-base text-sm">
          Our team consists of talented and experienced writers, editors, and
          researchers who are dedicated to delivering high-quality content that
          resonates with our readers. We take pride in our ability to craft
          well-researched, engaging, and informative articles that add value to
          your lives.
        </p>

        <p className="sm:text-base text-sm">
          We understand the importance of staying up-to-date with the latest
          trends and advancements, which is why we continuously strive to bring
          you fresh and relevant content. Our team is committed to exploring
          emerging topics, interviewing industry experts, and conducting
          in-depth research to ensure that we provide accurate and valuable
          information.
        </p>

        <p className="sm:text-base text-sm">
          At Blog Company, we believe in fostering a sense of community. We
          encourage our readers to actively participate by sharing their
          thoughts, ideas, and opinions in the comments section of our blog
          posts. We value the diverse perspectives and believe in the power of
          collaboration and conversation.
        </p>

        <p className="sm:text-base text-sm">
          {`     We are also committed to creating a user-friendly experience on our
  website. We have designed a clean and intuitive layout, making it easy
  for you to navigate and discover the content that interests you the
  most. Our responsive design ensures that you can enjoy our blog on any
  device, whether it's a computer, tablet, or smartphone.`}
        </p>

        <p className="sm:text-base text-sm">
          {` Thank you for visiting our Blog Company! We hope that you find
  inspiration, knowledge, and entertainment within our digital pages. Join
  us on this exciting journey as we continue to share captivating stories,
  insightful articles, and engaging content with you. Together, let's
  explore the world of words and ideas.`}
        </p>
      </div>
    </ScrollArea>
  );
};

export default About;
