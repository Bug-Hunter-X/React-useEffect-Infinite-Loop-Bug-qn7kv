# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop in the `useEffect` hook.

## Bug Description
The bug occurs in `MyComponent` where the `useEffect` hook attempts to update the state within its own dependency array. This causes an infinite loop because every state update triggers a re-render, which causes the useEffect to run again, and so on. 

## Solution
The solution involves correctly managing the dependencies array in the `useEffect` hook. In the corrected version, the dependency array is empty (`[]`) and the state update is only performed once upon component mounting.
