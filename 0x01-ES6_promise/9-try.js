export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
    queue.push('Guardrial was processed');
  } catch (error) {
    queue.push(`${error}`);
    queue.push('Guardrial was processed');
  }
  return queue;
}
