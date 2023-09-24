const flaggedSamples=[];

function toggleFlaggedSample(sample){
    if(flaggedSamples.includes(sample.id)){
        const indx= flaggedSamples.indexOf(sample.id);
        flaggedSamples.slice(indx, 1);
    }
    else{
        flaggedSamples.push(sample.id);
    }
    [...document.querySelectorAll(".flsgged")].forEach(
        (e) => e.classList.remove("flagged")
    );

    for(const id of flaggedSamples){
        const el = document.getElementById("sample_" + id);
        el.classList.add("flagged");
    }
}