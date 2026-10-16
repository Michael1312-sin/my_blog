// ───────────────────────────────────────────────────────────────
// YOUR CONTENT LIVES HERE. Edit freely — nothing else needs to change.
//
// To add a post: copy a block, paste it at the TOP of POSTS, and edit.
//   section: "hobbies" | "ideas" | "personal" | "professional"
//   stage:   "seedling" (rough thought) | "growing" (taking shape) | "evergreen" (settled)
// In the body: blank line = new paragraph, "## " = heading, "> " = quote.
// ───────────────────────────────────────────────────────────────

const SITE = {
  name: "Meet Singh",
  tagline: "A quiet corner for what I'm making, learning and thinking about.",
  intro: "No feed, no likes, no followers. Just notes I'm growing slowly, in my own time. Read what you like, leave when you like.",
  email: "" // add an address here if you want a contact link on the About page
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
  updated: "2026-10-16",
  items: [
    "Noticing how quickly AI, and the world around it, is changing everything.",
    "Building this little website, something I never thought I'd do.",
    "Getting to know myself better by trying things out."
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
I'm a curious soul, and I haven't figured out my life yet, including what I really want from it. That's okay.

This page is how I get to know myself better, by trying things and experimenting. Building a page of my own is something I never thought I'd do, but I was able to, so why not?

Let's explore life from my end.
`;
