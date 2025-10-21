function Article(props){
    let {icon, photo, name, surname, age} = props;

    return (
        <div className="card">
            <img src={photo} alt=""/>
            <div className="name">
                {name} {surname}
            </div>
            <div className="pol">
                <img src={icon} alt=""/>
            </div>
            <div className="age">
                {age}
            </div>
        </div>
    );
}
export default Article;