---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Crimson: What if low-code was built for developers?'
pubDate: 2025-08-26
slug: Crimson-Overview
image:
    url: '/images/blog/2025/Crimson-Overview/cover.webp'
    alt: 'Crimson logo cover photo'
tags: ["Education", "Technical"]
pinned: 2
attachments: [
  {
    href: "/attachments/blog/2025/Crimson-Overview/2006291%20Adam%20Govier%20Crimson%20Final.pdf",
    contentType: "application/pdf",
    displayName: "Crimson: Bridging Rapid Application Development and Traditional Development Environments (paper)"
  }
]
sources: [
  {
    href: "https://github.com/AdamGovier/Project-Crimson",
    displayName: "Crimson source code"
  }
]
---

# Why I built it

Crimson was my MSci Computing Science dissertation project at Robert Gordon University. It started with a question: could I bring some of the convenience of low-code development into the tools that developers already use?

The research I reviewed described familiar trade-offs. Low-code platforms could help people build applications faster, but custom requirements were often difficult to support. Moving away from a platform could also mean rebuilding much of the application. I wanted to explore whether I could reduce repetitive development work while keeping the code accessible and leaving developers in control.

My idea was to start with the interface. If a developer adds a table to display records, the application will need a way to fetch those records. If they add a form, it will need a way to save them. Crimson would use those component references to generate the corresponding backend code.

# What Crimson did

The prototype worked as an addition to a Vue.js project. A developer defined their data models in TypeScript, then passed a model to one of Crimson's components through an `entity-model` property. Crimson's compiler scanned the project and generated separate frontend and backend projects from those references.

I implemented three components: a data table, a data iterator for displaying lists with a custom layout, and a form for creating records. The table supported server-side pagination, basic filtering and deleting records. The form let the developer supply their own inputs while Crimson handled saving the submitted record.

For example, a simple contacts application could use a form to create contacts and a table to display them. The developer supplied the contact model, form inputs and table columns. Crimson generated the API routes and the client code needed to call them, saving the developer from writing that connection manually.

The output used Vue, Node.js, Fastify, MongoDB and TypeORM. Keeping the generated source readable was an important part of the design. A developer could inspect the output and continue working on it independently of Crimson.

# Building the compiler

Each Crimson component had a controller containing backend logic that could work with different data models. The compiler adapted that logic to the selected model and turned it into API routes. It also replaced the controller logic in the frontend output with calls to those routes.

That sounds fairly straightforward when written in two sentences. Implementing it was a different experience.

I used the TypeScript compiler API to inspect and generate code. Even constructing a fetch request meant assembling several pieces for its URL, parameters, headers and response handling. As the transformations grew, the compiler became harder to follow and maintain.

Partway through, I found TS-Morph, a library that could simplify this work. I decided to continue with the TypeScript compiler API because the prototype was already well underway and time was limited. I also wanted to understand the compiler better. It was a useful learning experience, although the complexity remained something I would need to address.

# What worked, and what did not

Crimson successfully generated backend routes from frontend component usage. It could produce a simple application for creating and displaying records, and the generated code was readable. That gave me a working example of the idea I had set out to explore.

However, the prototype also ran into one of the problems I had wanted to solve: limited flexibility.

## Custom behaviour was still missing

I had designed ways for developers to supply custom filtering logic or override a component's controller. Those features did not make it into the prototype. If an application needed behaviour beyond the supplied components, Crimson could not yet support it through the intended workflow.

Readable output helped, but it did not solve the whole problem. A developer could edit the generated backend, then lose those changes the next time Crimson compiled the input project. Continuing independently was possible; continuing to use Crimson alongside manual changes was much harder.

That distinction became one of the most useful lessons from the project. Giving someone access to generated code is only part of giving them control over it.

## A working demonstration was not enough

Authentication, authorisation and secure handling of sensitive data still needed work. The prototype also lacked the testing and range of components needed for real projects.

This limited what I could conclude from the dissertation. I could demonstrate route generation, but I could not establish that Crimson reduced development time or project costs. Answering those questions would need a more complete tool and a study comparing it with other development approaches.

# Feedback from developers

I demonstrated Crimson to DEV4 Online. The feedback was encouraging about its potential for quickly building prototypes that clients could try and discuss. They also suggested it could help frontend developers learn how APIs support an interface, which was a use I had not considered during the design.

Their feedback also made the gaps clearer. Developers needed control over backend behaviour, validation on both the client and server, flexible authentication, and the ability to test generated code. Losing manual changes during recompilation was a particular concern.

One suggestion was a way to merge changes from the output back into the input project. That would be a substantial problem to solve, but it addressed something central to Crimson: how does the tool remain useful as an application grows beyond its defaults?

# What I learned

Crimson taught me a great deal about code generation and the difficulty of designing development tools. Getting the standard behaviour working was only part of the task. The harder question was how to support the point where a developer needed something different.

If I returned to it, I would start with that question. Custom backend logic would need to survive recompilation, and validation, authentication and testing would need to be part of the workflow. I would also like to investigate the reverse approach: starting with the backend and using it to guide the interface.

Crimson remains a proof of concept. It demonstrated that the core idea was possible, while showing how much work remained before it could support a real project. The [source code is available on GitHub](https://github.com/AdamGovier/Project-Crimson), and the full dissertation is attached below.
