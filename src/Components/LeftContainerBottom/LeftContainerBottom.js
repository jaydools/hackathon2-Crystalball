import './LeftContainerBottom.scss';

function LeftContainerBottom() {
    return (
        <body>
            <div className="container">
                <div className="container__top">
                    <h3 label for="number">Number of Participants</h3>
                    <input type="text" name="number" id="number" placeholder="  Add number of Participants" className="upload__form--top--box"/>
                </div>
                <div className="container__bottom">
                    <h2>Price Point</h2>
                    <div>
                    <h3 label for="number">Free</h3>
                    <input type="text" name="number" id="number" placeholder="FREE" />
                    </div>
                    <div>
                    <h3 label for="number">Not Free</h3>
                    <input type="text" name="number" id="number" placeholder="$$$$" />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LeftContainerBottom;