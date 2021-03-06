const videoElement = document.getElementById('video');
const button = document.getElementById('button')

// prompt user to select a media stream, then pass that to a video element, then play.
async function selectMediaStream() {
    try {
        // Screen Capture API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        console.log('whoops, error here:', error)
    }
}

// on load
selectMediaStream();