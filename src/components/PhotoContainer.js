const PhotoContainer = (props) => {

    if(props.searchString === 'cats') {
        return (
            <div>
                <ul>
                    <li>cat1</li>
                    <li>cat2</li>
                    <li>cat3</li>
                </ul>
            </div>
        )
    }
    else if (props.searchString === 'dogs') {
        return (
            <div>
                <ul>
                    <li>dog1</li>
                    <li>dog2</li>
                    <li>dog3</li>
                </ul>
            </div>
        )
    }
    else if (props.searchString === 'computers') {
        return (
            <div>
                <ul>
                    <li>computer1</li>
                    <li>computer2</li>
                    <li>computer3</li>
                </ul>
            </div>
        )
    }
    else {
        return null;
    }
}

export default PhotoContainer;