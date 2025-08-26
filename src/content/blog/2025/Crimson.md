---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Crimson: What If Low-Code Was Built for Developers'
pubDate: 2025-08-26
slug: Crimson-Overview
image:
    url: '/images/blog/2025/Crimson-Overview/cover.webp'
    alt: 'Crimson logo cover photo'
tags: ["Education", "Technical"]
attachments: [
  {
    href: "https://cdn.adamgovier.co.uk/blog/2025/crimson/2006291%20Adam%20Govier%20Crimson%20Final.pdf",
    contentType: "application/pdf",
    displayName: "Crimson: Bridging Rapid Application Development and Traditional Development Environments (paper)"
  }
]
---

# The Question

Low-code development platforms promise faster application delivery and reduced complexity,
but they’re often designed for non-developers. This brings several trade-offs - limited flexibility, 
vendor lock-in, hidden generated code, and difficulties scaling to complex requirements.

Crimson was my MSci dissertation project — an experiment asking a simple question:
> What if low-code principles were applied, but the tool was designed for developers, not against them?

# The Idea

Crimson explores the concept of generating backend API routes automatically based on how developers use specific UI components in a Vue.js project.

For example, if you reference a &lt;DataTable&gt; component and pass it a model,
Crimson’s compiler attempts to generate the required CRUD endpoints automatically - while keeping the generated code 
human readable in order to reduce vendor lock-in.

**CODEBLOCK:** **TODO**

The goal wasn’t to remove coding entirely, but to reduce boilerplate while preserving a familiar development experience.

# Outcome

## What Worked

During the prototype phase, Crimson showed that:

**TODO**

## What Didn’t Work
Crimson is not production-ready and comes with clear limitations:

**TODO**

In short, it’s an exploration, not a finished framework.


## Lessons Learned

Crimson showed that developers value:

* Transparency — being able to see and edit generated code.
* Extensibility — avoiding hard platform lock-in.
* Developer-first workflows — integrating with familiar tools like Vue, TypeScript, and Node.

But it also highlighted that achieving these benefits without losing flexibility is harder than it looks. 
Balancing automation with control remains the biggest challenge.

## Next Steps

Crimson has a long way to go before it can prove itself useful. Here is a little list which might guide it to success:

* Heavily research methods of flexibility which wouldn't put developers down the same line of writing everything themselves.
* Include standard requirements such as RBAC.
* Investigate Crimson in reverse, i.e, backend first.

**TODO**

# Final Thoughts

Crimson doesn’t compete with mature low-code platforms and isn’t meant to replace traditional development. Instead, 
it’s an experiment in how automation could work differently - assisting developers rather than abstracting them away.

The prototype proved some core ideas are possible, but there’s a lot left to
explore before something like Crimson could become practical in real-world projects.

