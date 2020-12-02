//imports
import {Component} from 'react';
import Moodlist from '../MoodList/MoodList.js'


//class
class MoodInput extends Component {
    state = {
        currentMood: '',
        moods: []
    }//end state

    addMood = () => {
        this.setState({
            moods: [...this.state.moods, this.state.currentMood]
        })//end setState

    }//end addMood

    handleChangeFor = (event) => {
        this.setState({
            currentMood: event.target.value
        })
    }//end handleChangeFor


    
    render(){
        return(
            <div>
                <h2>Change Mood?</h2>
                <input type="text" placeholder="Current Mood" onChange={(event) =>this.handleChangeFor(event)}></input>
                <button onClick={this.addMood}>Apply Mood</button>
        <p>MoodInput State:{JSON.stringify(this.state)}</p>{/*add the prop where its being displayed*/}
        <Moodlist moods={this.state.moods}/>
            </div>
        )//end return
    }//end render
}//end class

//export
export default MoodInput;