# React-Redux Style Guide

This guide assumes that you are familiar with [React](https://reactjs.org) and maybe with [Redux](https://redux.js.org/) as well.
Make sure to have at least a sense of what they are, and hopefully [React-Redux](https://react-redux.js.org/) installed. For those of you who never heard of `Redux`...

## Basic Redux

...will be quick.

### Store

It is where you store your state. That is all you have to know. Most of the case, you only have to call this once in `React-Redux`.

### Action

The ** WHAT **. It is a plain JavaScript Object. Usually, you want to wrap this with a function, which is often called the `ActionCreator`. An action object looks something like this : 

```javascript
{
  type : SOME_ACTION,
  payload : {
    id : 'junwyoo',
    pw : 'n0tmyPa$$wrd'
  }
}
```

It looks just like a regular object. because it really is. An `ActionCreator` would look something like this : 

```javascript
function someAction(payload) {
  return {
    type : SOME_ACTION,
    payload
  }
}
```

### Reducer

The ** HOW **. It is a plain JavaScript Function. 

## Coding Principles



## References

[React-Redux](https://react-redux.js.org/)
[Redux](https://redux.js.org/)
