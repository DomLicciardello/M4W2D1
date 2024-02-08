// !!! MI SCUSO MA CAUSA LUTTO IN FAMIGLIA NON HO POTUTO SVOLGERE L'ESERCIZIO
// LO RECUPERERO' APPENA POSSIBILE

console.log("Prova collegamento.")

fetch("https://api.pexels.com/v1/5kxogu6Z0nXeR6DYeQUx1nsFycjJ0J40WSOPUB884DtGVJx4Y6SwosML")
.then((response) => response.json())
.then((json) => console.log(json))
.catch((err) => console.log("Error detected: ", err));