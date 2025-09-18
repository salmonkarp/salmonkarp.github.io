{% include my-header.html %}

# Assignment 1 Feedback
This is a reference document for general feedback for T11B. <br>

It would be good if you can review this document and confirm that you understand all the pointers, but it is completely okay to skip this if you think you have mastered the assignment already. <br>

## Question 5

In the question, you are told to assume:  

$$a, b \text{ are odd such that } a^2 + b^2 = c^2$$

This is essentially an indicator to you that you are meant to **CONTRADICT** this statement.

Most did perfectly fine in contradicting individual cases, or even taking good shortcuts in doing so. However a significant number gave the wrong conclusion.  

A very common conclusion is:

> Therefore, $$Odd(a) \wedge Odd(b) \to a^2 + b^2 \neq c^2$$  
> Taking the contrapositive, $$a^2 + b^2 = c^2 \to Even(a) \vee Even(b).$$

The first statement is **WRONG**. You cannot assume the premise is true, and then conclude that a part of the premise is false, and then continue rolling on with it by taking the contrapositive. In predicate form, you have essentially written:

> $$(x \wedge y = true) \to (x \to \neg y)$$


which is **FALSE**.

What most of you have actually written up to that point is that the premise itself is not logically consistent. Hence, the proper way of writing it is by "abandoning" the premise itself, e.g.

> Since both cases lead to a contradiction with line..., hence the assumption $Odd(a) \wedge Odd(b)$ cannot be true. <br>
> Hence, $Even(a) \vee Even(b)$.

* It is already **implicitly assumed** that $a^2 + b^2 = c^2$.  

* Note that you are asked to do a contraposition proof, you would have been asked to **ONLY assume that $Odd(a) \wedge Odd(b)$**, not $a^2 + b^2 = c^2$ too as this is what you're trying to reach at the end of a contradiction proof.

