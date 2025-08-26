const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture-btn');
const context = canvas.getContext('2d');

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => {
      console.error("Camera access denied or error: ", error);
      alert("Camera access denied. Please check permissions and try again.");
    });
}

function capturePhoto() {
  if (video.srcObject) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  } else {
    alert("Camera not accessible.");
  }
}

window.addEventListener('
