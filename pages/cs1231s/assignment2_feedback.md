# Assignment 2 Feedback
This is a reference document containing general feedback for T11B. <br>

It would be good if you can review this document and confirm that you understand all the pointers. <br>

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js">
</script>

## Question 1a
Very common mistake: forgetting to account for $$x = 0$$ when defining g.
Note that the question specifies that g must have the same domain and codomain of the set A.

## Question 1c
Common mistake 1: Did not prove surjectivity correctly. 
Do **NOT** work backwards by assuming that an $$(a,b)$$ already exists such that $$g(a,b) = (x,y)$$. 
Define what $$(a,b)$$ is in terms of $$(x,y)$$ first, and then prove that $$g(a,b) = x(x,y)$$ is indeed true after.

Common mistake 2: Used loose inverse function method. The question paper already provided you with a simple and concise method, without having to prove both directions in an IFF. You'll likely be penalised for lacking rigour in this regard.

## Question 2
Well-done question. Only mishaps should be the lack of justifications, or using divisibility concept very loosely.

## Question 3
Even more well-done question, though most overcounted cases than is necessary. See the model solution on how you can prove this more concisely.

The marking scheme only focuses on your proof of $$ A^* \subseteq S $$, as we assume triviality of the other direction. As long as you mention that $$ S \subseteq A^* $$ somewhere, you'll get the 1 mark associated with it (I ignore any mistakes in that section). We appreciate the rigour in proving both directions though!

While not marked, lack of conciseness is a problem in this question.

## Question 4a
A range of performance observed, which was expected. 

A good majority of proofs just lacked important justifications, including:
- Countability of General Cartesian product
- Countability via sequence, when applicable
- Countable union of countable sets
- **Proving that T is infinite**, which is a separate marking point from countability

The rest typically had logical gaps.
A common example of this is to define a function to map from some Cartesian product to $$T_n$$. While this is a valid approach, some failed to note that this function needs to be surjective such that $$T_n$$ is countable, or even that the fact that the domain is countable in the first place. (Those who proceeded to use sequence argument with this function shouldn't be affected by this)

While not marked, lack of conciseness is a problem in this question as well.

Still, most should have north of 3 marks as the grading scheme provides a decent amount of marks just for mentioning the result + common justifications alone.

## Question 4b
Rather tricky. Most got the correct result and counterexample, but a lot did not rigorously show that $$ T = \mathbb{Z}$$. In some way, most implicitly noted that $$ T \subseteq \mathbb{Z} $$ (either through vague assertions or concrete structural induction), but forgot to prove the other direction.

See the model solution on the complete, expected proof.

<br>
Other questions not mentioned here mean that they're well-done. Nearly all should have full marks for said questions.

<br> 
Feel free to contact me for any clarifications. Since the bulk of this assignment is on long-form proofs, I will allow a degree of flexibility of marking as long as it's sound and meets usual expectations.

{% include footer.md %}