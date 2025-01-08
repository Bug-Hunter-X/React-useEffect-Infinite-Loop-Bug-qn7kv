```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Only update state once on mount
    // The empty dependency array ensures that the effect runs only once
    console.log('Count updated once!');
  }, []);

  return <div>Count: {count}</div>;
}
```