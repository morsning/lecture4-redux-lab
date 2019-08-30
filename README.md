# lecture4-redux-lab

This is the code from our lab session. 

## Important!
As an exercise in lecture 5 I asked you to replace the history reducer in the project: react-with-redux.
More specifically replace it with the history reducer we wrote in in this redux-lab-session. 
By doing this you might have noticed that parts of our application was no longer functioning as we intended it to.
**We NEVER want to mutate an Object within our reducer functions, instead we want to return a new Object**