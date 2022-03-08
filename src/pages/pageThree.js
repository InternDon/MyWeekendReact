import "../style/stylesMain.css"
import LostArk from "../img/LostArk.jpg"

const pageThree = () => {

    return (
    <>  
        <div className="container-fluid pageThreediv p-2">
            <div className="card m-2">
                <img className="card-img imageCss" src="https://us.123rf.com/450wm/shock77/shock771807/shock77180700023/108162745-funny-cartoon-man-with-dirty-laundry-and-washing-machine.jpg?ver=6" alt="Card image cap " />
                <div className="card-body">
                    <h3 className="card-title">My Sunday Morning</h3>
                    <p className="card-text">The first thing that I did this Sunday is to do house chores like doing laundry, sweeping the floor, vacuum cleaning of the dust. And making sure that everything is clean since I like to start my day a  with a clean environment.</p>
                </div>
            </div>
            <div className="card m-2">
                <img className="card-img imageCss" src="https://i.pinimg.com/736x/49/cb/e4/49cbe40e4cdc40804711525d0c3e1075.jpg" alt="Card image cap " />
                <div className="card-body">
                    <h3 className="card-title">My Sunday Lunch</h3>
                    <p className="card-text">My Sunday lunch was to make a 'pancit canton' with a boiled egg. And frying a hotdog and putting a bread to the toaster so that it will get to toast. Taking a shower after eating and get back to prepare for my me time before the Sunday ends. </p>
                </div>
            </div>
            <div className="card m-2">
                <img src={LostArk} className="card-img imageCssTwo" alt="a random watchdog"/>
                <div className="card-body">
                    <h3 className="card-title">My Sunday Evening</h3>
                    <p className="card-text">My Sunday Evening is all about my me time. Finish the fourth ark artifacts for my character. And I just went to raid some bosses with friends in Lost Ark game. And did some enchantments for my character. And here the example picture from the game itself.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default pageThree