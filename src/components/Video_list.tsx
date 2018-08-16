import * as React from "react";
import { VideoListItem } from "./Video_list_item"

export const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        )
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}