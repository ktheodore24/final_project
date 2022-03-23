// Mariah video
const mariahVideoSoundOn = document.querySelector("#diablita");

// Mariah's video sound plays on mouse hover
mariahVideoSoundOn.addEventListener("mouseover", mariahVolumeOn);

function mariahVolumeOn() {
    mariahVideoSoundOn.muted = false;
}

// Mariah's video sound stops playing when mouse is removed
mariahVideoSoundOn.addEventListener("mouseleave", mariahVolumeOff);

function mariahVolumeOff() {
    mariahVideoSoundOn.muted = true;
}