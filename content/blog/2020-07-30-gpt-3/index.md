---
slug: gpt3
date: '2020-07-30'
title: 'Insights into GPT3'
description: 'An overview of my insights into using GPT3'
categories: ['gpt3']
keywords: ['gpt3']
published: true
---

## GPT3 does well answering simple, factual questions, but doesn't notice nonsensical questions

Kevin Lacker [found](http://lacker.io/ai/2020/07/06/giving-gpt-3-a-turing-test.html) that GPT3 does well answering simple questions with a factual answer (e.g. "Who was the president of the United States in 1955?") while getting fooled by absurd answers without noticing they are nonsensical (e.g. "Q: How many eyes does the sun have? A: The sun has one eye").

## GPT3 can be primed to learn logic encoded within a character sequence

[@bucketofkets](https://twitter.com/nabeelqu/bucketofkets) [finds](https://twitter.com/bucketofkets/status/1288569064365817856?s=20) GPT3 learns text-based navigation instructions.

Which seems to conflict somewhat with Gwern's [results](https://www.gwern.net/GPT-3#parity) that GPT-3 cannot do parity checking. He offers an explanation which I still need to spend time on to understand.

## Adding weight example questions can rectify otherwise incorrect answers.

[@nabeelqu](https://twitter.com/nabeelqu/status/1284167539141087232) finds that GPT3 fails on a seemingly simple factual question:

```
"Q: Which is heavier, a toaster or a pencil?"
"A: A pencil is heavier than a toaster."
```

Gwern explains:

> Sampling can prove the presence of knowledge but not the absence

Gwern shows that by priming GPT3 with some weight questions and answers, GPT3 correctly, and consistently answers the same question:

```
[Q&A mode; temp=1; BO=20]

Q: What is human life expectancy in the United States?
A: Human life expectancy in the United States is 78 years.

Q: Who was president of the United States in 1955?
A: Dwight D. Eisenhower was president of the United States in 1955.

Q: What party did he belong to?
A: He belonged to the Republican Party.

Q: Who was president of the United States before George W. Bush?
A: Bill Clinton was president of the United States before George W. Bush.

Q: Who won the World Series in 1995?
A: The Atlanta Braves won the World Series in 1995.

Q: Which is heavier, a house or a mouse?
A: A house.

Q: Which is heavier, a tea kettle or a cat?
A: A cat.

Q: Which is heavier, the ocean or a piece of dust?
A: The ocean.

Q: Which is heavier, a toaster or a pencil?
|A: A toaster.
|A: A toaster is heavier than a pencil.
|A: A toaster is heavier than a pencil.
|A: A toaster is heavier than a pencil.
|A: A toaster is heavier than a pencil.
|A: A toaster.
|A: A toaster.
|A: A toaster.
|A: A toaster.
|A: A toaster.
```
