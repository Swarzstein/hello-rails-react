const getRandomGreeting = async () => {
  const request = await fetch('/api/greetings/random_greeting');
  const greeting = await request.json();
  return greeting;
}

export default getRandomGreeting;