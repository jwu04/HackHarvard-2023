const Fade = (props) => {
    return (
        <div className={`fade-in`}
             style={{
                 animationName: `slide${props.type ? `-${props.type}` : ""}`,
                 animationDuration: `${props.duration}`
             }}>
            {props.children}
        </div>
    )
}

export default Fade
