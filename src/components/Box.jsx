export default function Box(props) {
    return (
        <div style={{
            backgroundColor: props.color,
        }} className="box" >
            {props.message}
        </div>
    )
}