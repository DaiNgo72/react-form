
export function Card({ name, image, style, className }) {
  return (
    <div style={style} className={className}>
      <img src={image} />
      <p>{name}</p>
    </div>
  );
}
