

const courses = [
    {
        id: 1,
        childLabel: "MODULE 1.3",
        label: "MODULE NAME",
        time: "1 Hour 24 Minutes",
        views: 8,
        image: "../../public/images/mycourses/1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Scheduled",
    },
    {
        id: 2,
        childLabel: "MODULE 1.3",
        label: "MODULE NAME",
        time: "1 Hour 24 Minutes",
        views: 8,
        image: "../../public/images/mycourses/2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Completed",
    },
    {
        id: 3,
        childLabel: "MODULE 1.3",
        label: "MODULE NAME",
        time: "1 Hour 24 Minutes",
        views: 8,
        image: "../../public/images/mycourses/3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Locked",
    },
]
const coursesArticles = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },
    {
        id: 10,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        counters: 10,
    },

]
const qnaTopics = [
    {
        id: 1,
        title: "Questions About Key Decisions (Module 1)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 2,
        title: "Questions About Key Decisions (Module 2)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 3,
        title: "Questions About Key Decisions (Module 3)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 4,
        title: "Questions About Key Decisions (Module 4)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 5,
        title: "Questions About Key Decisions (Module 5)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 6,
        title: "Questions About Key Decisions (Module 6)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 7,
        title: "Questions About Key Decisions (Module 7)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 8,
        title: "Questions About Key Decisions (Module 8)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 9,
        title: "Questions About Key Decisions (Module 9)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },
    {
        id: 10,
        title: "Questions About Key Decisions (Module 10)",
        questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        questionsUpdated: "Last Updated on September 12 2022 ",
    },

]

const dummydata = {
    courses,
    coursesArticles,
    qnaTopics
}

export default dummydata;