// ───────────────────────────────────────────────────────────────
// YOUR CONTENT LIVES HERE. Edit freely — nothing else needs to change.
//
// To add a post: copy a block, paste it at the TOP of POSTS, and edit.
//   section: "hobbies" | "ideas" | "personal" | "professional"
//   stage:   "seedling" (rough thought) | "growing" (taking shape) | "evergreen" (settled)
// In the body: blank line = new paragraph, "## " = heading, "> " = quote.
// ───────────────────────────────────────────────────────────────

const SITE = {
  name: "Your Name",
  tagline: "A quiet corner for what I'm making, learning and thinking about.",
  intro: "No feed, no likes, no followers. Just notes I'm growing slowly, in my own time. Read what you like, leave when you like.",
  email: "your-email@example.com"
};

const SECTIONS = {
  hobbies:      { label: "Hobbies",      blurb: "Things I do because I enjoy them." },
  ideas:        { label: "Ideas",        blurb: "Half-formed thoughts worth keeping." },
  personal:     { label: "Personal growth",     blurb: "Habits, mindset, getting to know myself." },
  professional: { label: "Professional growth", blurb: "Skills, work and where I'm heading." }
};

const STAGES = {
  seedling:  { icon: "🌱", label: "Seedling" },
  growing:   { icon: "🌿", label: "Growing" },
  evergreen: { icon: "🌲", label: "Evergreen" }
};

// What you're up to lately. Update whenever you like.
const NOW = {
  updated: "2026-10-15",
  items: [
    "Setting up this little website.",
    "Figuring out which hobbies I want to make time for.",
    "Learning to write down thoughts instead of carrying them around."
  ]
};

const POSTS = [
  {
    slug: "why-i-started-writing",
    title: "Why I started this space",
    date: "2026-10-15",
    section: "personal",
    stage: "growing",
    summary: "Social media felt like too much. This is the opposite.",
    body: `
Most social platforms ask me to perform. I wanted somewhere I could simply think out loud.

## What this place is

> A notebook that happens to be open to visitors.

I'll write about my hobbies, my ideas, and how I'm trying to grow, personally and professionally. Some posts will be rough. That's why they're marked as seedlings.

Thanks for stopping by.
`
  },
  {
    slug: "a-hobby-note",
    title: "A hobby I want to make time for",
    date: "2026-10-12",
    section: "hobbies",
    stage: "seedling",
    summary: "Replace this with something you love doing.",
    body: `
Replace this with a note about a hobby: what it is, why you enjoy it, what you're trying next.

Photos and progress logs work well here.
`
  },
  {
    slug: "an-idea",
    title: "An idea I keep coming back to",
    date: "2026-10-10",
    section: "ideas",
    stage: "seedling",
    summary: "Replace this with one of your own ideas.",
    body: `
Write the idea in a few honest paragraphs. You don't need to have it figured out.
`
  },
  {
    slug: "skills-im-building",
    title: "Skills I'm building this year",
    date: "2026-10-08",
    section: "professional",
    stage: "growing",
    summary: "A running list of what I'm learning at work.",
    body: `
List what you're learning, what's hard, and what you want to be able to do by next year.
`
  }
];

const ABOUT = `
Write a few sentences about who you are, what you do for work, and what you like to spend time on.

You can reach me at the email below. I read everything, though I might reply slowly.
`;
