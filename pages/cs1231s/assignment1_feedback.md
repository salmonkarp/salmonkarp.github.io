# Assignment 1 Feedback
This is a reference document for general feedback for T11B. <br>

It would be good if you can review this document and confirm that you understand all the pointers, but it is okay to skip this if you think you have mastered the assignment already. <br>

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js">
</script>

## Question 1a
No major issue. Just be careful when doing this in exam as these are meant to be free marks.

## Question 1b
The order of variables still matter at this stage! (e.g. in distributive law, identity law, negation law, etc.) <br>
You may be penalised if said order is wrong. <br>

Another common error is to cite the wrong property. <br>
Identity Law $$\neq$$ Negation Law $$\neq$$ Idempotent Law $$\neq$$ Universal Bound Law. <br>
Take note of their differences! <br>

Also, take note of this property: <br>
$$ \neg(a \to b) = (a \wedge \neg b)$$ <br>
This is not part of core logical equivalences (if you check, it's not on the summary table often used).
Hence, you **CANNOT** use this here and simply quote "absorption law". <br> <br>
Apparently, Prof has also mentioned that even quoting it directly from lecture should not be allowed. Hence, you should only use this when asked for a more loose proof (like in Q5, Q6) and in MCQs.

## Question 2
Most of the 'arguments' written here look more like **PROOFS**, not **ARGUMENTS**.
For the majority who did this, this wasn't penalised **because most still had the correct laws of inference.** To be specific, we require:
* A logical sequence of steps.
* Laws of inference when non-trivially required: e.g. modus ponens, modus tollens, transitive rule of inference.
* No use of non-trivial properties to solve the question, which includes:
  * Use of implication law from P2 and directly concluding without saying specialization. <br>
  (This is admittedly a harsh requirement. However, the purpose of doing this is that it should have been obvious that just using one law from P2 $$\to$$ conclusion is not what we want, given this is a 5-mark question. Thankfully, no one did this to an extreme extent.)
  * Use of negation law / identity law / universal bound law to replace generalisation, which many unfortunately did.

Taking contrapositive and double negative law is allowed. However, a more argument-like justification is usually able to replace them (modus ponens, modus tollens, etc).

To see how an ideal argument should look like, you can look at T1 or other sources. I have also annotated those with model solutions, so ask around if any of your classmates have the model solution.

> #### ERRATA
> In tutorial, I said that overly-long arguments may be penalised, specifically as this might skip a step that is part of the marking scene. This was in reference to Q2, where transitive law of inference **used to be** a strict requirement. This has been changed. You should get full marks even if you don't use transitive laws of inference.

## Question 3
No major issue. Error typically in part d, where both cases were not considered.

## Question 4
No major issue, which is good! Majority even came up with a more intuitive version that is logically equivalent to that in the answer key. <br>

If you have any issues with this, I recommend going over the general definitions of "unique", "at least", "at most" that have been covered in previous lectures, as well as those redefined in the Relations chapter.

## Question 5

This was generally done well. However a common error was concluding through contraposition. <br>

In the question, you are told to assume:  

$$a, b \text{ are odd such that } a^2 + b^2 = c^2$$

This is essentially an indicator to you that you are meant to **CONTRADICT** this statement.

Most did perfectly fine in contradicting individual cases, or even taking good shortcuts in doing so. However a significant number gave the wrong conclusion.  

A very common conclusion is:

> Therefore, $$Odd(a) \wedge Odd(b) \to a^2 + b^2 \neq c^2$$  
> Taking the contrapositive, $$a^2 + b^2 = c^2 \to Even(a) \vee Even(b).$$

The first statement is **WRONG**. You cannot assume the premise is true, and then conclude that a part of the premise is false, and then continue rolling on with it by taking the contrapositive. In predicate form, you have essentially written this as your prooof: 

> $$(x \wedge y) \to (x \to \neg y)$$


which is **FALSE**, no matter the predicate.

What most of you have actually written up to that point is that the premise itself is not logically consistent. Hence, the proper way of writing it is by "abandoning" the premise itself, e.g.

> Since both cases lead to a contradiction with line..., hence the assumption 
> $$Odd(a) \wedge Odd(b)$$ cannot be true.  
> Hence, $$Even(a) \vee Even(b)$$.

Additional pointers:
* It is already **implicitly assumed** that $$a^2 + b^2 = c^2$$  
* Note that you are asked to do a contraposition proof: you would have been asked to **ONLY assume that $$Odd(a) \wedge Odd(b)$$** not $$a^2 + b^2 = c^2$$ too, since that is what you are trying to reach at the end of a contradiction proof.
* Other common errors include missing justifications or quoting the wrong result, but these are rare.

## Question 6
Done even better than Question 5. Almost all got full marks. <br>
Originally, this question expected you to account for A = {}. While this didn't end up being the case, it is good to remind yourself what would be different in your proof if A can indeed be {}. <br> <br>

<a href="javascript:history.back()">← Back</a> | [Home](/) | [Projects](/pages/projects.md) | [About](/pages/about/about.md)