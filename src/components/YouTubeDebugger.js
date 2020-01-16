// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {


    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
              resolution: '1080p'
            }
          }
        } 
    }
    
    handleClick = event => {
        this.setState({
            settings: {
                ...this.state.settings,bitrate: 12
            }
          }
        )
    }
    
    handleResolutionClick = event => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                resolution: "720p"    
                }
            }
        })

    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClick}>{this.state.settings.bitrate}</button>,
                <button className="resolution" onClick={this.handleResolutionClick}>{this.state.settings.resolution}</button>
           </div>
       )
   } 

}
export default YouTubeDebugger;