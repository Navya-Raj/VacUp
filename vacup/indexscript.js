let currentFeature = 0;
const features = document.querySelectorAll('.feature-card');

function showFeature(index) {
    features.forEach((feature) => {
        feature.style.display = 'none';
    });
    features[index].style.display = 'block';
}

function nextFeature() {
    currentFeature = (currentFeature + 1) % features.length;
    showFeature(currentFeature);
}

function prevFeature() {
    currentFeature = (currentFeature - 1 + features.length) % features.length;
    showFeature(currentFeature);
}

// Show the first feature initially
showFeature(currentFeature);
