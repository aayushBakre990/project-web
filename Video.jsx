export default function Video(props) {
  return (
    <div className={props.state}>
      <video width="720" controls>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}
