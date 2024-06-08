export default function Marquee(props) {
    return(
        <>
            <marquee direction={props.dir} style={props.styling} scrollAmount={props.speed}>
                <h1>{props.title}</h1>
            </marquee>
        </>
    )
}