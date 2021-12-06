const zoomProperty = {
    tint: true,
    tintColour: '#F90',
    tintOpacity: 0.5,
    zoomLevel: 0.1,
    scrollZoom: true,
    // zoomWindowFadeIn: 500,
    // zoomWindowFadeOut: 500,
    // zoomWindowHeight: 300,
    // zoomWindowWidth: 400,
}

$(document).ready(() => {
    $('#elevate-image1').elevateZoom({
        ...zoomProperty,
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        zoomWindowHeight: 300,
        zoomWindowWidth: 400,
    });
    $('#elevate-image2').elevateZoom(zoomProperty)
    $('#elevate-image3').elevateZoom(zoomProperty)
    $('#elevate-image4').elevateZoom(zoomProperty)
    $('#elevate-image5').elevateZoom(zoomProperty)
});
