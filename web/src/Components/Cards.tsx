export function Cards({ title, description, date, time }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  )
}
