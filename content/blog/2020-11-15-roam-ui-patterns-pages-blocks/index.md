---
slug: roam-pages-blocks
date: "2020-11-15"
title: "Roam's UI Design Patterns: Pages & Blocks"
description: "Roam's UI Design Patterns: Pages & Blocks"
categories: [roam, ux, ui]
published: true
---

*(This is a weekly series where I cover Roam's UI patterns in-depth. This week we take a closer look at Roam's concepts of Pages and Blocks.)*

# Pages & Blocks

Any repository of knowledge needs some structure in order for it to be useful.  Most knowledge management systems [^1] encourage you to choose a location for your note while or after entering it. On first pass this makes sense. It's how we would write and archive a physical note, and it's long been the dominant metaphor for working with computer files i.e. storing a *file* in a *folder*. 

Some tools augment this ability of storing notes at specific locations with an ability to tag the note. Folders have hierarchy, tags do not. Notes can have one-to-many relationships with tags, whereas with folders you're limited to one-to-one relationships. Using tags gives you some more flexibility, but that flexibility quickly comes at a cost of things getting messy

Roam makes its first design choice here. Where we’re used to tags being something we apply to a Page (i.e. a note), Roam makes no distinction between what we otherwise might haved referred to as a Page or a Tag. Pages and Tags are the same thing in Roam, and as we'll see later, this is both confusing and powerful.

In Roam, the text that comprises your notes lives inside Blocks (more on those later), and Blocks live inside Pages. Pages aren’t like Notes in Evernote or Pages in Notion primarily *because they have no location*. This creates a problem: If something doesn't have a location, how does one find it? Roam gets around this problem by allowing Pages to be found through the references that are to it from within other Pages [^2].

![Notion vs. Evernote vs. Roam](images/notion-vs-evernote-vs-roam.png)

The references between Pages form a graph of how your notes relate to one another. A Page without any references is a node in the graph without any connections to other nodes.

![Starting with an empty page](images/one-node.png)

A Page can contain Blocks of text — units of text preceded by a bullet point and reminiscent of a bullet point list seen in virtually any text editor. Although Pages themselves don’t have a location, they serve as locations for Blocks to live in. If a specific Block lives in Page A, that means it doesn't live in Page B, or anywhere else.

Blocks are atomic units of text in Roam. By atomic I mean that a Block cannot be divided into something smaller. The text within the block comes with a range of super powers, which we'll get into in a later post.

For now the most important attribute of the text within a Block is its ability to contain a Page Reference: a link to another Page. This is invoked by enclosing the Page name in double square brackets ([[Like This]]). These Page References at the Block level constitute links between Pages at the Page level and show up when we let Roam draw our graph.

![First Page References](images/first-page-references.png)

Where Pages were locationless and hierarchyless, Blocks have both a location (i.e. the Page they live in) and a hierarchical relationship (in relation to other blocks). Hierarchy is achieved and manipulated by visually indenting one block under another. The indented Block becomes the child Block to the non-indented Block [^3].

For some readers this rendition of Blocks will sound reminiscent of Blocks in [Workflowy](https://workflowy.com) or in [Notion](https://notions.so), and up until here the parallels are indeed strong. 

Unless a new Page Reference is made, adding Block Indentations doesn't impact our graph.

![More Blocks Don't Make a Difference](images/more-blocks-dont-make-a-difference.png)

So Pages are the nodes in our network, and Pages are composed of Blocks. Pages are locationless and nonhierarchical whereas Blocks have a location as well as  hierarchy. Blocks are the components that contain text, and the text is used to create references between Pages.

These are two of the most fundamental building blocks of Roam and as conceptual units they could hardly be more different. That being said, much of the power of Roam comes from having two classes of building blocks with perpendicular conceptual properties, and allowing them to build off of each other.

---

Thanks to [Alan Szepieniec](https://asz.ink/) for reviewing an early draft of this article.

[^1]: There's legitimate debate whether we should be calling Roam knowledge management software, note taking software, or something else entirely. I'm going to go with knowledge management software acknowledging that's not an exhaustive description.

[^2]: From within a Block in another Page to be exact.

[^3]: A Block that is not indented will have the Page itself as parent.