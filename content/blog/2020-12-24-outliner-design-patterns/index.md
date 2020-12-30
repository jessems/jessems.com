---
slug: outliner-design-patterns
title: "Outliner Design Patterns"
date: "2020-12-24"
published: true
---

*This is an overview of the design patterns that are commonly used in outliner software. You can view a comprehensive list of outliners [here](/outliner-list).*

*This is a working document*

*Last updated 2020-12-24*

## Nesting, Promote/Demote, Collapsing (Basic Outliner Features)

### Problem

We want to be able to easily view, navigate and manipulate the hierarchy of a collection of items. Classical word outliners only offer a linear model.

### Solution

Nesting is the affordance of putting something in or under something else and having it displayed as a subordinate of that item, usually through indentation. Classically windows would display such a relationship with a plus and mac with an arrow.

Nested items can be promoted or demoted in the hierarchy, usually by adjusting their indentation accordingly. Modern outliners allow this to be done through the Tab and Shift + Tab keyboard shortcuts.

Collapsing is the affordance of allowing the user to hide an items subordinate items, only displaying the top-level item. Usually this is paired with some type of state change in the top level's icon indicating that it contains hidden subordinate items.

## Hierarchy-based automatic styling

### Problem

It is difficult to see the structure of the hierarchy by indentation alone.

## Hierarchy-independent Styling

### Problem

We might want to convey structure or emphasis using conventional text styling (e.g. H1, H2)

### Solution

Some outliners include options for changing the font size and text decoration irrespective of the outline level.

## Inline Notes

### Problem

We want to include a comment or meta-information about an item within the outline without manipulating the item itself or adding content within the outline.

### Solution

Afford the user the option to add a meta-level comment on each item across the hierarchy.

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fjessems-second-brain%2F9bgqy3bB20.png?alt=media&token=18487f11-9774-4e6f-98ea-ce23b7405be9)

## Multiple entities

### Problem

Having only one type of entity to be used in the hierarchy can be limiting.

### Solution

Allow for multiple entities to be used in the hierarchy. The Mac Finder, for example, allows you to use folders and files. A file can live inside a folder, but nothing can live inside a file.

### Examples

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fjessems-second-brain%2F4hxzmOytfU.png?alt=media&token=e1121339-e5e4-4cdc-ac54-6826c8fe8c0f)

Example from Dynalist where they use Folders and Documents as the two entities. Documents can live inside/underneath Folders, but not underneath other Documents.

## Outlines within outlines

### Problem

A small amount of allowed hierarchy levels may not be enough to fully represent some information.

### Solution

Allow infinite levels of outlining.

### Examples

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fjessems-second-brain%2FO2P5KmG1bA.png?alt=media&token=42742fd8-0a90-48cc-90a8-7877976bd0ec)

## Finder integration

### Problem

Within a tree / file cabinet metaphor, the note entities are stored at a location within some abstraction. The file system and the explorer / finder are the default paradigms for navigating files across platforms. Allowing for manipulation of the hierarchy's highest level, therefor, amounts to manipulating individual files. Manipulation at the file-level, however, may not be something that is afforded to the user.

### Solution

Integrate the file-level view into the outliner.

## Meta-outlines (Outlines __about__ outlines)

### Problem

Sometimes we would like to work with outlines as the entities themselves and view and manipulate a hierarchy of such entities. 

## Folding

### Problem

When text spans more than a single line, it can clutter the hierarchical overview.

### Solution

Folding limits the space a line takes up to 1 line by truncating it.

## Other Graphical Layouts

### Problem

A hierarchical or textual view of our notes often doesn't give us the perspective or context necessary.

## Clippers

### Problem

We want to be able to take information we find outside of our note taking tool and bring it into our notes.

### Solution

Use a separate tool or a browser extension to "clip" content and send it back to the outliner.

## Integrated Multilevels

Ability to promote and demote between outline items and the note header

## Embedding external content

### Problem

We want to link to external resources.

## Internal Links

### Problem

We want to be able to indicate that two ideas are connected and easily navigate between the two within our notes.

## Clones

### Problem

You want an item to exist in two different outlines at the same. Said differently, you have a concept which has multiple parent concepts.

### Solution

The solution can be analogous to an "alias" in file systems.

## Group operations

### Problem

You want to perform an operation on a non contiguous group of items.

### Solution

Allow the user to search for items that match certain criteria, which results in a selection which can then be moved or promoted / demoted.

## Hoisting

### Problem

You want to work on part of an outline without experiencing the distractions and increased cognitive load involved with having irrelevant parts of the outline in view.

### Solution

A location in the outline can be hoisted, which displays the item and its subordinates as if they were the only items in the outline.

### References

http://archive.today/2020.12.12-062347/http://www.atpm.com/9.10/atpo.shtml

http://archive.today/2020.12.12-061939/http://www.atpm.com/9.11/atpo.shtml