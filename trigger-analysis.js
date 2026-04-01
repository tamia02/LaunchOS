async function trigger() {
    const response = await fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            idea: "AI tool for developers to generate implementation plans",
            userId: "founder"
        })
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
}
trigger();
