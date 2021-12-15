// Feid video
const feidVideoSoundOn = document.querySelector("#tengo-fe");

// Feid's video sound plays on mouse hover
feidVideoSoundOn.addEventListener("mouseover", feidVolumeOn);

function feidVolumeOn() {
    feidVideoSoundOn.muted = false;
}

// Feid's video sound stops playing when mouse is removed
feidVideoSoundOn.addEventListener("mouseleave", feidVolumeOff);

function feidVolumeOff() {
    feidVideoSoundOn.muted = true;
}


// Vince Staples video
const vinceVideoSoundOn = document.querySelector(".vince-staples-video-window");

// Vince's video sound plays on mouse hover
vinceVideoSoundOn.addEventListener("mouseover", vinceVolumeOn);

function vinceVolumeOn() {
    vinceVideoSoundOn.muted = false;
}

// Vince's video sound stops playing when mouse is removed
vinceVideoSoundOn.addEventListener("mouseleave", vinceVolumeOff);

function vinceVolumeOff() {
    vinceVideoSoundOn.muted = true;
}


// Joyce Wrice video
const joyceVideoSoundOn = document.querySelector(".joyce-wrice-video-window");

// Joyce's video sound plays on mouse hover
joyceVideoSoundOn.addEventListener("mouseover", joyceVolumeOn);

function joyceVolumeOn() {
    joyceVideoSoundOn.muted = false;
}

// Joyce's video sound stops playing when mouse is removed
joyceVideoSoundOn.addEventListener("mouseleave", joyceVolumeOff);

function joyceVolumeOff() {
    joyceVideoSoundOn.muted = true;
}

