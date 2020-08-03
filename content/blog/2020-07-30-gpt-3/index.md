---
slug: gpt-3
date: '2020-07-30'
title: 'Insights into GPT-3'
description: 'An overview of my insights into using GPT3'
categories: ['gpt3']
keywords: ['gpt3']
published: true
---

## GPT-3 is best thought of as an autocompleter. It replies with what it thinks the internet would reply with.

Nick Cammarata offers a way to think about GPT-3.

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">I think improve will work. Keep in mind gpt3 is an autocompleter. It’s not trying to write a great essay, just the essay it thinks the internet would write. When you ask it to improve it, now it’s trying to write a great essay</p>&mdash; Nick Cammarata (@nicklovescode) <a href="https://twitter.com/nicklovescode/status/1284685741759492096?ref_src=twsrc%5Etfw">July 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## GPT-3 does well answering simple, factual questions, but doesn't notice nonsensical questions

Kevin Lacker [found](http://lacker.io/ai/2020/07/06/giving-gpt-3-a-turing-test.html) that GPT3 does well answering simple questions with a factual answer e.g.

```
"Q: Who was the president of the United States in 1955?"
```

while getting fooled by absurd answers without noticing they are nonsensical e.g.

```
Q: How many eyes does the sun have?
A: The sun has one eye
```

## GPT-3 does well on tasks of expanding on and explaining topics

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">1/ Asked <a href="https://twitter.com/RichardDawkins?ref_src=twsrc%5Etfw">@RichardDawkins</a> on GPT3 to explain the central idea of his book &quot;The Selfish Gene&quot;.<br/><br/>Here&#39;s what it said.<br/><br/>(Everything after Dear Paras is GPT3). <a href="https://t.co/hAfeeYxPAP">pic.twitter.com/hAfeeYxPAP</a></p>&mdash; Paras Chopra (@paraschopra) <a href="https://twitter.com/paraschopra/status/1284423233047900161?ref_src=twsrc%5Etfw">July 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I didn&#39;t quite understand everything in your tweet, so I passed it through the <a href="https://twitter.com/OpenAI?ref_src=twsrc%5Etfw">@OpenAI</a> <a href="https://twitter.com/hashtag/GPT3?src=hash&amp;ref_src=twsrc%5Etfw">#GPT3</a> API.<br/><br/>It took multiple runs and some tweaks, and I&#39;m still not sure I can trust it entirely, but here&#39;s what it came up with.<br/><br/>I think I understand your point now. Or have I been misled? <a href="https://t.co/X0noJX7D0v">pic.twitter.com/X0noJX7D0v</a></p>&mdash; Jesse Szepieniec (@jessems) <a href="https://twitter.com/jessems/status/1283030473816576002?ref_src=twsrc%5Etfw">July 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## GPT-3 can be primed to learn logic encoded within a character sequence

[@bucketofkets](https://twitter.com/nabeelqu/bucketofkets) [finds](https://twitter.com/bucketofkets/status/1288569064365817856?s=20) GPT3 learns text-based navigation instructions.

Which seems to conflict somewhat with Gwern's [results](https://www.gwern.net/GPT-3#parity) that GPT-3 cannot do parity checking. He offers an explanation which I still need to spend time on to understand.

## GPT-3 seems to be a highly effective therapist

@nicklovescode finds that GPT-3 is a highly potent therapist.

This is the prompt he used:

```
This is a conversation between Nick and a brilliant, warm therapist named John.
```

Here's the result: ![](https://pbs.twimg.com/media/Ec9J9a-UEAAafD0?format=jpg&name=small)

## GPT-3 seems well suited to generate alternative phrasings

This could be useful for, for instance, AB testing, as already put into production by [Visual Website Optimizer](https://www.producthunt.com/posts/humans-vs-ai).

## Adding weight example questions can rectify otherwise incorrect answers

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
