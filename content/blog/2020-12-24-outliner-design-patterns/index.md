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

## Hierarchy-based automtatic styling

### Problem

It is difficult to see the structure of the hierarchy by indentation alone.

## Hierarchy-independent Styling

### Problem

We might want to convey structure or emphasis using conventional text styling (e.g. H1, H2)

### Solution

Some outliners include options for changing the font size and tex decoration irrespective of the outline level.

## Inline Notes

### Problem

We want to include comment about the information contained within an entity without 

### Solution



## Multiple entities

### Problem

Having only one type of entity to be used in the hierarchy can be limiting.

Solution



## Outlines within outlines

### Problem

One or two layers of hierarchy might be not be enough to accurately model 

## Finder integration

### Problem

Within a tree / file cabinet metaphor, the note entities are stored at a location within some abstraction. The file system and the explorer / finder are the default paradigms for navigating the file cabinet. We want to be able to view and manipulate the highest level of our tree.

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

A hierarchical or textual view of our notes often doesn't give us the perspective or insight we need.

## Clippers

### Problem

We want to be able to take information we find outside of our note taking tool and bring it into our notes.



## "Integrated Multilevels"

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



