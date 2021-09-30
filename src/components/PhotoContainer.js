const PhotoContainer = ({match}) => {

    let topic = match.params.topic;

    if(topic === 'cats') {
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
    else if (topic === 'dogs') {
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
    else if (topic === 'computers') {
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