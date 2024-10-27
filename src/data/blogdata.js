import { blog1, blog3, blog4 } from "../assets";
const sectionText = `
Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. 
Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. 
Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem ipsum dolor sit amet consectetur. 
Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. 
Tempus enim volutpat elit vel a nisl eu felis. Lorem ipsum dolor sit amet consectetur. 
Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. 
Tempus enim volutpat elit vel a nisl eu felis.<br/><br/>

Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. 
Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. 
Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem ipsum dolor sit amet consectetur. 
Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. 
Tempus enim volutpat elit vel a nisl eu felis.<br/><br/>

Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. 
Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. 
Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem ipsum dolor sit amet consectetur. 
Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. 
Tempus enim volutpat elit vel a nisl eu felis.
`;
export const blogs = [
  {
    id: 1,
    title:
      "A REMINDER TO ALL PARENTS: YOU DON’T HAVE TO GET IT ‘RIGHT’ ALL THE TIME",
    description:
      "This article provides insight into how to influence your child effectively.",
    date: "SEPTEMBER 6, 2023",
    imgSrc: blog1,
    theme: "rose",
    likes: 1200,
    comments: 50,
    blogSections: [
      {
        heading: "Understanding Parental Roles",
        text: sectionText,
      },
      {
        heading: "Nibh Consectetur Mi",
        subheading: "How to Respond to Your Child",
        text: sectionText,
        image: blog3,
      },
      {
        heading: "Effective Communication with Children",
        text: sectionText,
      },
    ],
  },
  {
    id: 2,
    title:
      "WHY VALIDATING YOUR CHILD'S EMOTIONS CAN BACKFIRE (AND WHAT TO DO INSTEAD)",
    description:
      "Learn how others perceive your child and ways to positively shape their future.",
    date: "NOVEMBER 15, 2023",
    imgSrc: blog1,
    theme: "blue",
    likes: 1400,
    comments: 80,
    blogSections: [
      {
        heading: "The Impact of Validation",
        text: sectionText,
      },
      {
        heading: "What to Do Instead",
        subheading: "Strategies for Emotional Coaching",
        text: sectionText,
        image: blog1,
      },
      {
        heading: "Concluding Thoughts",
        text: sectionText,
      },
    ],
  },
  {
    id: 3,
    title: "10 WAYS TO BRING EMOTIONAL INTELLIGENCE INTO YOUR CLASSROOM",
    description:
      "Learn practical strategies to integrate emotional intelligence into your classroom setting.",
    date: "SEPTEMBER 28, 2023",
    imgSrc: blog3,
    theme: "blue",
    likes: 1100,
    comments: 65,
    blogSections: [
      {
        heading: "Emotional Intelligence in Education",
        text: sectionText,
      },
      {
        heading: "Practical Classroom Strategies",
        subheading: "Integrating Emotional Learning",
        text: sectionText,
        image: blog1,
      },
      {
        heading: "Creating a Supportive Environment",
        text: sectionText,
      },
    ],
  },
  {
    id: 4,
    title:
      "A REMINDER TO ALL PARENTS: YOU DON’T HAVE TO GET IT ‘RIGHT’ ALL THE TIME",
    description:
      "A second reminder on how it's okay to make mistakes as a parent.",
    date: "SEPTEMBER 10, 2023",
    imgSrc: blog4,
    theme: "rose",
    likes: 1300,
    comments: 60,
    blogSections: [
      {
        heading: "Revisiting Parental Roles",
        text: sectionText,
      },
      {
        heading: "Nibh Consectetur Mi",
        subheading: "Responding to Mistakes",
        text: sectionText,
        image: blog4,
      },
      {
        heading: "Building Emotional Resilience",
        text: sectionText,
      },
    ],
  },
  {
    id: 5,
    title:
      "EMBRACING THE CHAOS: USING EMOTIONAL INTELLIGENCE TO MOVE THROUGH ANGER",
    description: "Strategies to navigate anger through emotional intelligence.",
    date: "AUGUST 23, 2023",
    imgSrc: blog4,
    theme: "blue",
    likes: 900,
    comments: 40,
    blogSections: [
      {
        heading: "Managing Anger Through EI",
        text: sectionText,
      },
      {
        heading: "Nibh Consectetur Mi",
        subheading: "Techniques to Channel Anger",
        text: sectionText,
        image: blog4,
      },
      {
        heading: "Finding Peace in Chaos",
        text: sectionText,
      },
    ],
  },
  {
    id: 6,
    title: "HOW TO HANDLE YOUR CHILD'S EMOTIONAL INTELLIGENCE",
    description:
      "Guide on managing and fostering your child's emotional intelligence.",
    date: "OCTOBER 1, 2023",
    imgSrc: blog4,
    theme: "rose",
    likes: 1100,
    comments: 55,
    blogSections: [
      {
        heading: "Understanding Child EI",
        text: sectionText,
      },
      {
        heading: "Techniques for Developing EI",
        subheading: "Supporting Emotional Growth",
        text: sectionText,
        image: blog1,
      },
      {
        heading: "Nurturing Emotional Intelligence",
        text: sectionText,
      },
    ],
  },
  {
    id: 7,
    title: "PARENTING STRATEGIES FOR THE MODERN WORLD",
    description:
      "Modern parenting strategies to tackle the challenges of today's world.",
    date: "OCTOBER 15, 2023",
    imgSrc: blog1,
    theme: "blue",
    likes: 1500,
    comments: 100,
    blogSections: [
      {
        heading: "Modern Parenting Challenges",
        text: sectionText,
      },
      {
        heading: "Nibh Consectetur Mi",
        subheading: "Adapting to New Age Challenges",
        text: sectionText,
        image: blog1,
      },
      {
        heading: "Building Strong Family Bonds",
        text: sectionText,
      },
    ],
  },
];
