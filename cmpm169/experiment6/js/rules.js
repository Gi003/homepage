
//3 Different kinds of Scenes------------------------------------
//Main scene block -- inputing JSON scene object as key
class Location extends Scene {
    create(key) {
        let locationData = key;                 //Making alias
        this.engine.setText(locationData.Text); // Reading text field
        
        if(locationData.Edges.length != 0) {        //Make labels for buttons different than the title of next place
            for(let choice of locationData.Edges) { 
                this.engine.addChoice(choice,this.engine.storyData.World[choice]);
            }
        } else {
            this.engine.addChoice("The end.")
        }
    }

    handleChoice(choice) {
        if(choice) {
            this.engine.gotoScene(Location, choice);
        } else {
            this.engine.gotoScene(End);
        }
    }
}

//Start -- Initial transitor 
class Start extends Scene {
    create() {
        this.engine.setText(this.engine.storyData.Intro);
        setTimeout(() => {
            this.engine.addChoice("Begin the story");
        },"2000");
    }

    handleChoice() {
        console.log(this.engine.storyData.World.Living_room);
        this.engine.gotoScene(Location, this.engine.storyData.World.Living_room); 
    }
}

//Ending point
class End extends Scene {
    create() {
        this.engine.setText("The end");
    }
}
