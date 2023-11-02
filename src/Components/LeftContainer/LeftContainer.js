import "./LeftContainer.scss"

function LeftContainer() {



    return (
        <div className="activity">
            <div className="activity__textbox">
                <h1 className="activity__textbox--font">Choose Activity</h1>
            </div>
            <div className="activity__button">
                <button className="activity__button--clicker">Random</button>
            </div>

        </div>
    )
}

export default LeftContainer;